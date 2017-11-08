class Api::StepsController < ApplicationController
    def index
       
         @walk = Walkthrough.find(params[:walkthrough_id])
         @steps = @walk.steps.all
         puts @steps
         render json: @steps

    end   
    def create
         @walkthrough = Walkthrough.find params[:walkthrough_id]
        @walkthrough.steps.create(steps_params)
       puts "File saved"

      end

      private
      
          def steps_params
              params.require(:step).permit(:title, :links, :body)
          end
end