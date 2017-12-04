class Category < ApplicationRecord
    has_many :walkthroughs, dependent: :destroy
    has_many :notes, dependent: :destroy 
    belongs_to :user
end
