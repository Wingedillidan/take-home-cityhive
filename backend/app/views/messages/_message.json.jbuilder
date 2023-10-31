json.extract! message, :id, :text, :phone_number, :delivered, :created_at, :updated_at
json.url message_url(message, format: :json)
