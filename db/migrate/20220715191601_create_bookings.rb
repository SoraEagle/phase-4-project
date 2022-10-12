class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :hotel_id
      t.integer :user_id
      t.date :date

      t.timestamps
    end
  end
end
