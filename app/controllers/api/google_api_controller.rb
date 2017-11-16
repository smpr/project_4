require "google_service"

class Api::GoogleApiController < ApplicationController

    def show
        puts "show hit"
        puts params[:lat]

        elevation = Services::GoogleService.find_elevation(params[:lat], params[:lng])

        render json: elevation
    end




end