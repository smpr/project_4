class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    can :read, Category

    can [:destroy], Category do |post|
      post.user == user
    end
  end
end