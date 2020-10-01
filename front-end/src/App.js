import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import Movie from './Movie'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'


const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&page=1"

class App extends Component {
  state = {
    popularPics: [],
  }

  componentWillMount() {
    this.fetchHeaderPopular()
  }

  fetchHeaderPopular = () => {
    fetch(popularMoviesUrl)
      .then(res => res.json())
      .then(popularMovies => this.setState({ popularPics: popularMovies.results }))
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/movie">
              <Movie />
            </Route>
            <Route path="/">
              <MainPage popularPics={this.state.popularPics} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



