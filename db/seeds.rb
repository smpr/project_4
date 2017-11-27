Step.destroy_all
Walkthrough.destroy_all
Category.destroy_all
Info.destroy_all
Meetup.destroy_all
User.destroy_all


bob = User.create!(
    email: 'test2@test.com',
    password: '12345678',
    password_confirmation: '12345678'
)
demo = User.create!(
    email: 'demo@demo.com',
    password: '123123123',
    password_confirmation: '123123123'
)
bobinfo = Info.create(city:"Yukon",state:"Oklahoma",address:"1036 Cooper Ln",country:"USA",zip: 73099, user_id: bob.id)
demoinfo = Info.create(city:"Marietta",state:"GA",address:"1104 Havel Dr",country:"USA",zip:30008, user_id: demo.id)

bobcat = Category.create(title:"React", user_id: bob.id)
bobcat2 = Category.create(title:"Ruby", user_id: bob.id)
democat = Category.create(title:"React", user_id: demo.id)
democat2 = Category.create(title:"Ruby on Rails", user_id: demo.id)

bobwalk = Walkthrough.create(name:"Template Server", links:"none",body:"This is the default template for react apps", category_id: bobcat.id)
bobwalk2= Walkthrough.create(name:"Ruby comands", links:"none",body:"Standard Ruby comands", category_id: bobcat2.id)
demowalk = Walkthrough.create(name:"Template Server", links:"none",body:"This is the default template for react apps", category_id: democat.id)
demowalk2 = Walkthrough.create(name:"Server Template", links:"none",body:"Setting up default rails template", category_id: democat2.id)

bobstep1 = Step.create(title:"1", body:"1", links:"1", walkthrough_id: bobwalk.id)
bobstep2 = Step.create(title:"11", body:"1", links:"1", walkthrough_id: bobwalk.id)
bobstep3 = Step.create(title:"12", body:"12332", links:"", walkthrough_id: bobwalk.id)
bobstep4 = Step.create(title:"12", body:"12332", links:"", walkthrough_id: bobwalk.id)
demostep1 = Step.create(title:"13", body:"12323", links:"", walkthrough_id: demowalk.id)
demostep2 = Step.create(title:"123", body:"123231", links:"", walkthrough_id: demowalk.id)
demostep3 = Step.create(title:"123", body:"12323", links:"", walkthrough_id: demowalk.id)
demostep4 = Step.create(title:"12424", body:"12332", links:"", walkthrough_id: demowalk.id)
bobstep11 = Step.create(title:"12124214", body:"12323", links:"", walkthrough_id: bobwalk2.id)
bobstep21 = Step.create(title:"12442124", body:"123213", links:"", walkthrough_id: bobwalk2.id)
bobstep31 = Step.create(title:"12442", body:"123213", links:"", walkthrough_id: bobwalk2.id)
bobstep41 = Step.create(title:"124412", body:"2143", links:"", walkthrough_id: bobwalk2.id)
demostep11 = Step.create(title:"124442", body:"12423", links:"", walkthrough_id: demowalk2.id)
demostep21 = Step.create(title:"24124", body:"12442", links:"", walkthrough_id: demowalk2.id)
demostep31 = Step.create(title:"21442", body:"21424", links:"", walkthrough_id: demowalk2.id)
demostep41 = Step.create(title:"12442", body:"12442", links:"", walkthrough_id: demowalk2.id)