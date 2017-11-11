class User < ActiveRecord::Base
  has_many :categories
  has_one :user
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable

  include DeviseTokenAuth::Concerns::User
end
