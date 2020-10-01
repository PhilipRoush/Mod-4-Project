import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import Movie from './Movie'
import { Router, Switch, Link, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&page=1"

class App extends Component {
  state = {
    popularPics: [],
    movie: [],
  }

  componentWillMount() {
    this.fetchHeaderPopular()
  }

  fetchHeaderPopular = () => {
    fetch(popularMoviesUrl)
      .then(res => res.json())
      .then(popularMovies => this.setState({ popularPics: popularMovies.results }))
  }

  showCard = (movie) => {
    this.setState({movie: movie})
    history.push('/movie')
  }


  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/movie">
              <Movie movie={this.state.movie}/>
            </Route>
            <Route path="/">
              <MainPage popularPics={this.state.popularPics} showCard={this.showCard}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



