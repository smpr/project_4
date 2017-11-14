module Services
    class MeetupService
        include HTTParty
        def self.get_meetups(zipcode ,text)
            api_key = ENV["meetup_api_key"]
            #this sends a search to the api
            
            cat = Category.where("%#{zipcode}%", "%#{text}%")
            search_results =[]
            
            cat.each do |stuff|
                search = {
                    text: stuff['title']
                }
                search_results << search
            end

            #this sets up the data coming back from the api
            response = get("https://api.meetup.com/find/groups?key=#{api_key}&sign=true&photo-host=public&zip=#{zipcode}&text=#{text}&page=20")
            answers = response['results']
            meetups = []
                answers.each do |stuff|
                   info = {
                    name: stuff['text'],
                   link: stuff['link'],
                   description: stuff['description'],
                   city: stuff['city'],
                   state: stuff['state'],
                   coutry: stuff['country'],
                   lat: stuff['lat'],
                   lon: stuff['lon']
                    }
                    answers << info
                end
            return answers


        end
    end
end