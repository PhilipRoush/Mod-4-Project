class MoviesController < ApplicationController
    
    def index
        @movies = Movie.all
        render json: @movies, except: [:created_at, :updated_at] 
    end
    
    def show
        @movie = Movie.find(params[:id])
        render json: @movie
    end

    def create
        @movie = Movie.new(movie_params)
        @movie.save
        render json: @movie
    end

    def destroy
        Movie.find(params[:id]).destroy
    end

    def update
        @movie = Movie.find(params[:id])
        @movie.update(movie_params)
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :image_url, :description, :director, :rating, :genre, :trailer)
    end

end
