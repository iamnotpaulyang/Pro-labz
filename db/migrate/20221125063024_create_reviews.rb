class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :protein_shake, null: false, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
