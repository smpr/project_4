module Services
    class MeetupService
        include HTTParty
        def self.get_meetups(search)
                
            api_key = ENV["meetup_api_key"]
            #this sends a search to the api
            # cat = Category.where("title ILIKE ?", "%#{search}%")
            # search_results =[]
            # cat.each do |stuff|
            #     search = {
            #         text: stuff['title']
            #     }
            #     search_results << search
            # end

            #this sets up the data coming back from the api
            response = HTTParty.get("https://api.meetup.com/find/groups?key=#{api_key}&sign=true&photo-host=public&zip=30301&text=#{search}&page=20")
            answers = JSON.parse(response.body)
            meetups = []
            answers.each do |stuff|
                info = {
                name: stuff['name'],
                link: stuff['link'],
                description: stuff['description'],
                city: stuff['city'],
                state: stuff['state'],
                coutry: stuff['country'],
                lat: stuff['lat'],
                lon: stuff['lon']
                }
                meetups << info
            end
            
            return meetups


        end
    end
end