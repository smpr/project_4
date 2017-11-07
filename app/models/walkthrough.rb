class Walkthrough < ApplicationRecord
    has_many :steps
    belongs_to :category
end
