class Step < ApplicationRecord
  belongs_to :walkthrough
  validates :title, presence: true
  validates :body, presence: true
 
end
