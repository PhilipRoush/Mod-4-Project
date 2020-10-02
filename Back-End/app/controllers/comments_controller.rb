class CommentsController < ApplicationController

    def index
        @comments = Comment.all

        render json: @comments, except: [:created_at, :updated_at] 
    end
    
    def show
        @comment= Comment.find(params[:id])
        render json: @comment
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.save
        render json: @comment
    end

    def destroy
        Comment.find(params[:id]).destroy
    end

    def update
        @comment = Comment.find(params[:id])
        @comment.update(comment_params)
    end

    private

    def comment_params
        params.require(:comment).permit(:movie_id, :text)
    end

end
