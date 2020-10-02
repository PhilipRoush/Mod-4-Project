import React, { Component } from 'react';
import Navbar from './Navbar'
import HeaderContainer from './containers/HeaderContainer'
import SearchResultBar from './containers/SearchResultBar'
import FavoriteBar from './FavoriteBar'
import Footer from './Footer'
import PopularMoviesContainer from './containers/PopularMoviesContainer'

const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&page=1"

class MainPage extends Component {

    state = {
        popularMovies: [],
        // popularPics: [],
        searchMovies: []
    }

    componentDidMount() {
        this.fetchPopular()
        // this.fetchSearch()
    }

    // componentWillMount() {
    //     this.fetchHeaderPopular()
    // }

    // fetchHeaderPopular = () => {
    //     fetch(popularMoviesUrl)
    //         .then(res => res.json())
    //         .then(popularMovies => this.setState({ popularPics: popularMovies.results }))
    // }

    fetchPopular = () => {
        fetch(popularMoviesUrl)
            .then(res => res.json())
            .then(popularMovies => this.setState({ popularMovies: popularMovies.results }))
    }

    movieSearch = (movie) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&query=${movie}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(searchMovies => this.setState({searchMovies: searchMovies.results}))
    }

    // showCard = (movie) => {
    //     console.log(movie.id)
    // }


    render() {
        return (
            <div className="MainPage-Wrapper">
                <Navbar movieSearch={this.movieSearch}/><br></br>
                <HeaderContainer popularMovies={this.props.popularPics}/>
                <h2>The World Of Movies Is Yours ...</h2> <h2 className="search-text">Search</h2>
                <SearchResultBar showCard={this.props.showCard} searchMovies={this.state.searchMovies} />
                <h2>Trending</h2>
                <PopularMoviesContainer showCard={this.props.showCard} popularMovies={this.state.popularMovies} />
                <FavoriteBar />
                <Footer />
            </div>
        );
    }


}

export default MainPage;