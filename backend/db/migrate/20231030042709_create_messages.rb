class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text, required: true
      t.string :phone_number, required: true
      t.belongs_to :user
      t.datetime :delivered, default: nil 

      t.timestamps
    end
  end
end
