class Category < ApplicationRecord
    has_many :walkthroughs, dependent: :destroy 
end
