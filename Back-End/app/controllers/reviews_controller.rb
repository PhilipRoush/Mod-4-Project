class ReviewsController < ApplicationController
    def index
        @reviews = Review.all

        render json: @reviews, except: [:created_at, :updated_at] 
    end
    
    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def create
        @review = Review.new(review_params)
        @review.save
        render json: @review
    end

    def destroy
        Review.find(params[:id]).destroy
    end

    def update
        @review = Review.find(params[:id])
        @review.update(review_params)
    end

    private

    def review_params
        params.require(:review).permit(:rating, :comment, :user_id, :movie_id)
    end
end
