class Api::WalkthroughsController < ApplicationController
    def index
        @cat = Category.find(params[:category_id])
        @walkthroughs = @cat.walkthroughs.all
        render json: @walkthroughs
    end
    def show
        @Walkthrough = Walkthrough.find(params[:id])
        render json: @Walkthrough
    end
    def create
        @walkthrough = Category.find params[:category_id]
        @walkthrough.walkthroughs.create(walkthrough_params)
        # @new_walkthrough = Walkthrough.create!(walkthrough_params)
       
        # @new_walkthrough.save
       puts "File saved"

      end
      def update
        @walkthrough = Walkthrough.find(params[:id])
        @walkthrough.update!(walkthrough_params)
        # @city = City.includes(:posts).order('posts.created_at Desc').find(params[:city_id])
        # render json: @city, include: [:posts]
        puts "Update hit"
      end
      def destroy
        @walkthrough =Walkthrough.find(params[:walkthrough_id]).delete

      end
    
      private
      
          def walkthrough_params
              params.require(:walkthrough).permit(:name, :links, :body)
          end
end