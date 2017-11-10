class Category < ApplicationRecord
    has_many :walkthroughs, dependent: :destroy 
    belongs_to :user
end
