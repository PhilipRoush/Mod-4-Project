class RatingsController < ApplicationController

    def index
        @ratings = Rating.all
        render json: @ratings, except: [:created_at, :updated_at] 
    end
    
    def show
        @rating = Rating.find(params[:id])
        render json: @rating
    end

    def create
        @rating = Rating.new(rating_params)
        @rating.save
        render json: @rating
    end

    def destroy
        Rating.find(params[:id]).destroy
    end

    def update
        @rating = Rating.find(params[:id])
        @rating.update(rating_params)
    end

    private

    def rating_params
        params.require(:rating).permit(:rating, :user_id, :movie_id)
    end

end
