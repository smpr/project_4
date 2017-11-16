class Api::MeetupsController < ApplicationController
    before_action :authenticate_user!
    include HTTParty
    base_uri 'https://api.meetup.com/find/groups'
    # def self.generate(api_id)
    #   star_war = find_by api_id: api_id
    #   return star_war unless star_war.nil?
  
    #   response = get "/#{api_id}"
    #   placeholder_image = "https://www.placecage.com/c/#{200 + api_id}/#{200 + api_id}"
  
    #   create!(name: response['name'],
    #           image: placeholder_image,
    #           wins: 0, 
    #           api_id: api_id)
    # end
 
    def index
        @meetups = current_user.meetups
        
        render json: @meetups
    end

    def show
        @meetup = Meetup.find(params[:id])
        render json: @meetup
    end

    def create
        @user = current_user
        @meetup = @user.meetups.new(meetup_params)
        
    
        if @meetup.save
          render json: @meetup, status: :created
        else
          render json: @meetup.errors, status: :unprocessable_entity
        end
      end

    def update
        @meetup = Meetup.find(params[:id])
    
    
        if @meetup.update(meetup_params)
          render json: @meetup
        else
          render json: @meetup.errors, status: :unprocessable_entity
        end
      end
      def destroy
        @meetup = Meetup.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def meetup_params
              params.require(:meetup).permit(:city, :country, :indentification, :name, :link, :description, :lat, :float)
          end
end
