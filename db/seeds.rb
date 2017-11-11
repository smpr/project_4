Step.destroy_all
Walkthrough.destroy_all
Category.destroy_all
User.destroy_all

bob_loblaw = User.create!(
    email: 'test2@test.com',
    password: '12345678',
    password_confirmation: '12345678'
)
