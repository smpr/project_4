class Api::InfosController < ApplicationController
    before_action :authenticate_user!
    def index
        @infos = current_user.infos
    
        render json: @infos
      end

    def show
        @info = Info.find(params[:id])
        render json: @info
    end
    def create
        @user = current_user
        @info = @user.infos.new(info_params)
        
    
        if @info.save
          render json: @info, status: :created
        else
          render json: @info.errors, status: :unprocessable_entity
        end
      end
    def update
        @info = Info.find(params[:id])
    
    
        if @info.update(info_params)
          render json: @info
        else
          render json: @info.errors, status: :unprocessable_entity
        end
      end
      def destroy
        @info = Info.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def info_params
              params.require(:info).permit(:city, :state, :address, :country, :zip)
          end
end
