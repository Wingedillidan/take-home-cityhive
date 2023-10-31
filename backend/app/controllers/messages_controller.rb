require 'twilio-ruby'

class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

  def initialize
    @twilio_client = Twilio::REST::Client.new(ENV['TWILIO_SID'], ENV['TWILIO_SECRET'], ENV['TWILIO_USER_SID'])
  end

  # GET /messages or /messages.json
  def index
    @messages = Message.where(user: current_user).all

    render json: { messages: @messages }
  end

  # GET /messages/1 or /messages/1.json
  def show
    render json: { message: @message }
  end

  # POST /messages or /messages.json
  def create
    @message = Message.new({**message_params, user: current_user})

    if @message.save && send_sms
      render json: { status: :created, location: @message }
    else
      @message.destroy! if @message.save
      render json: { error: @message.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /messages/1 or /messages/1.json
  def update
    if @message.update(message_params)
      render json: { status: :ok, message: @message }
    else
      render json: { error: @message.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /messages/1 or /messages/1.json
  def destroy
    @message.destroy!

    render json: { notice: "Message was successfully destroyed." }
  end

  private

  def send_sms
    return nil unless @twilio_client

    begin
      message = @twilio_client.messages.create(
        body: @message.text,
        to: @message.phone_number,
        from: ENV['TWILIO_PHONE_NUMBER'],
      )

      return message
    rescue Twilio::REST::RestError => e
      puts e.message
    end
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_message
    @message = Message.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def message_params
    params.permit(:phone_number, :text)
  end
end
