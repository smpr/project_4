class Api::MeetupsController < ApplicationController
    before_action :authenticate_user!
    def index
        @meetups = current_user.meetups
        
        render json: @meetups
    end

    def show

    end

    def create

      end

    def update

      end
      def destroy

      end
      private
      
          def meetups_params
              params.require(:meetup).permit(:city, :country, :indentification, :name, :link, :description, :lat, :float)
          end
end
