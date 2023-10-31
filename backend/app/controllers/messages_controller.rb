class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

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
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        render json: { status: :created, location: @message }
      else
        render json: { error: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages/1 or /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        render json: { status: :ok, message: @message }
      else
        render json: { error: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1 or /messages/1.json
  def destroy
    @message.destroy!

    respond_to do |format|
      render json: { notice: "Message was successfully destroyed." }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:phone_number, :text, :delivered)
    end
end
