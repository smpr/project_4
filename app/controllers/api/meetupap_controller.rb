require 'meetup_service'
class Api::MeetupapController < ApplicationController
    # this grabs the infro off of the meetup service and allows it to be used in the axios call
    def index
        @groups = Services::MeetupService.get_meetups(params[:search])
        render json: @groups
    end

    def show

    end
end