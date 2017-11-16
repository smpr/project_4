module Services
    
    class GoogleService
    
        include HTTParty
        
        def self.find_elevation(lat, lng)
            puts "google services hit"
            @access_token = ENV['API_KEY']
            puts "https://maps.googleapis.com/maps/api/elevation/json?locations=#{lat},#{lng}&key=#{@access_token}"
            response = get "https://maps.googleapis.com/maps/api/elevation/json?locations=#{lat},#{lng}&key=#{@access_token}"

            response

        end
    
    
    end
end