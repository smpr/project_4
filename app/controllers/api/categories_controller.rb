class Api::CategoriesController < ApplicationController
    before_action :authenticate_user!
    def index
        @categories = current_user.categories
    
        render json: @categories
      end

    def show
        @category = Category.find(params[:id])
        render json: @category
    end
    # def new
    #     @category = Category.new
    # end
    def create
        @user = current_user
        @category = @user.categories.new(category_params)
        
    
        if @category.save
          render json: @category, status: :created
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end
    # def create
    #     @new_category = Category.new(category_params)
    #     @new_category.save
    #    puts "File saved"
    #   end
    def update
        @category = Category.find(params[:id])
    
    
        if @pcategory.update(category_params)
          render json: @category
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end
      def destroy
        @category = Category.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def category_params
              params.require(:category).permit(:title)
          end
end
