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
        @category = Category.find params[:category_id]
        @category.walkthroughs.create(walkthrough_params)
        # @new_walkthrough = Walkthrough.create!(walkthrough_params)
       puts @category
        # @new_walkthrough.save
       puts "File saved"
       render json: @new_walkthrough
      end
    
      private
      
          def walkthrough_params
              params.require(:walkthrough).permit(:name, :links, :body)
          end
end