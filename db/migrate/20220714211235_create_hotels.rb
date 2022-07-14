class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :company
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
