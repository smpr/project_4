class Api::NotesController < ApplicationController
    def index
        @cat = Category.find(params[:category_id])
        @notes = @cat.notes.all
        render json: @notes
        puts "Notes Index Hit"

    end
    def show
        @note = Note.find(params[:id])
        render json: @note
        puts "Notes Show Hit"
    end
    def create
        @cat = Category.find params[:category_id]
        @cat.notes.create(note_params)
        puts "Notes Create Hit"
      end
      def update
        @note = Note.find(params[:id])
        @note.update!(note_params)
        puts "Notes Update Hit"
      end
      def destroy
        @note =Note.find(params[:id]).destroy
        puts "Notes Destroy Hit"
      end
    
      private
      
          def note_params
              params.require(:note).permit(:name, :link, :body)
          end
end