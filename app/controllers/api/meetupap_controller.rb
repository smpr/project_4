require 'meetup_service'
class Api::MeetupapController < ApplicationController
    def index
        @groups = Services::MeetupService.get_meetups(params [:title])
        render json: @groups
        
    end
    def show

    end
    
end