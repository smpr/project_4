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
      def show
        @step = Step.find(params[:id])
        render json: @step
    end
    def update
        @step = Step.find(params[:id])
        @step.update!(steps_params)
        # @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
        # render json: @city, include: [:posts]
        puts "Update hit"
      end
      def destroy
        @step = Step.find(params[:id])
        @step.destroy 
        puts @step
        render json: @step

      end
      private
      
          def steps_params
              params.require(:step).permit(:title, :links, :body)
          end
end