Step.destroy_all
Walkthrough.destroy_all
Category.destroy_all
Info.destroy_all
Meetup.destroy_all
User.destroy_all


bob = User.create!(
    email: 'test2@test.com',
    password: '123123123',
    password_confirmation: '123123123'
)
demo = User.create!(
    email: 'demo@demo.com',
    password: '123123123',
    password_confirmation: '123123123'
)
bobinfo = Info.create!(city:"Yukon",state:"Oklahoma",address:"1036 Cooper Ln",country:"USA",zip: 73099, user_id: bob.id)
demoinfo = Info.create!(city:"Marietta",state:"GA",address:"1104 Havel Dr",country:"USA",zip:30008, user_id: demo.id)

bobcat = Category.create(title:"React", user_id: bob.id)
bobcat2 = Category.create(title:"Ruby", user_id: bob.id)
democat = Category.create(title:"React", user_id: demo.id)
democat2 = Category.create(title:"React on Rails", user_id: demo.id)

bobwalk = Walkthrough.create(name:"Template Server", links:"none",body:"This is the default template for react apps", category_id: bobcat.id)
bobwalk2= Walkthrough.create(name:"Ruby comands", links:"none",body:"Standard Ruby comands", category_id: bobcat2.id)
demowalk = Walkthrough.create(name:"Template Server", links:"none",body:"This is the default template for react apps", category_id: democat.id)
demowalk2 = Walkthrough.create(name:"Server Template", links:"none",body:"Setting up default React on Rails template", category_id: democat2.id)

bobstep1 = Step.create(title:"Comand Line", body:"create-react-app (app name)", links:"1", walkthrough_id: bobwalk.id)
demostep1 = Step.create(title:"Comand Link", body:"create-react-app (app name)", links:"", walkthrough_id: demowalk.id)
bobstep11 = Step.create(title:"12124214", body:"12323", links:"", walkthrough_id: bobwalk2.id)
bobstep21 = Step.create(title:"12442124", body:"123213", links:"", walkthrough_id: bobwalk2.id)
bobstep31 = Step.create(title:"12442", body:"123213", links:"", walkthrough_id: bobwalk2.id)
bobstep41 = Step.create(title:"124412", body:"2143", links:"", walkthrough_id: bobwalk2.id)
demostep11 = Step.create(title:"Create Rails App", body:"In console type: rails new (name) -d postgresql --api", links:"", walkthrough_id: demowalk2.id)
demostep21 = Step.create(title:"Cd into new directory", body:"cd (app name)", links:"", walkthrough_id: demowalk2.id)
demostep31 = Step.create(title:"Create React App", body:"create-react-app client", links:"", walkthrough_id: demowalk2.id)
demostep41 = Step.create(title:"Create a package.json", body:"On the root level: touch package.json", links:"", walkthrough_id: demowalk2.id)
demostep51 = Step.create(title:"Populate package.json", body:"This is where we will put all of the info for heroku to use for deployment. Paste the following: ", links:"", walkthrough_id: demowalk2.id)
demostep61 = Step.create(title:"Create a proxy in react files package.json", body:"Inside the file add a proxy so that it knows where the data base is.", links:"", walkthrough_id: demowalk2.id)
demostep71 = Step.create(title:"Create a Procfile.dev", body:"This is what foreman uses to know what to run. Create the procfile.dev and populate it with server info", links:"", walkthrough_id: demowalk2.id)
demostep81 = Step.create(title:"Start Foreman", body:"foreman start -f Procfile.dev", links:"", walkthrough_id: demowalk2.id)
demostep91 = Step.create(title:"Create models in rails", body:"rails g model NAME value: ", links:"", walkthrough_id: demowalk2.id)
demostep101 = Step.create(title:"Rails db initial start", body:"rails db:create db:migrate db:seed", links:"", walkthrough_id: demowalk2.id)
demostep111 = Step.create(title:"Setup Models", body:"Create the models and their relationship to eachother", links:"", walkthrough_id: demowalk2.id)
demostep121 = Step.create(title:"Generate Controllers", body:"rails g controller api::artists", links:"", walkthrough_id: demowalk2.id)