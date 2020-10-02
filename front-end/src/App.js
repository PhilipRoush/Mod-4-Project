
import Home from "./Home";
import './App.css';
import './logSign.css'
import MainPage from './MainPage'
import React, { Component } from "react";
import { Router, Switch, Route } from 'react-router-dom'
import axios from "axios";
import Movie from './Movie'
import { createBrowserHistory } from "history";

// import Registration from './Registration'
// import Login from './Login'

const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d5b1a0507451a686fe3ad617dac6002e&language=en-US&page=1"

const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
      popularPics: [],
      movie: []
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }




  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        console.log("logged in?", response)
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "Welcome! Login or Sign-Up to further enjoy!",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "Welcome! Login or Sign-Up to further enjoy!",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: `Welcome, ${this.state.user}`,
      user: data.user
    });
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
            <Route
              exact
              path={"/login"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
           <Route path="/movie">
              <Movie movie={this.state.movie}/>
            </Route>
              
            <Route
              path={"/"}
              render={props => (
                <MainPage {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  popularPics={this.state.popularPics}
                  showCard={this.showCard}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
  
  export default App;
//   return (
//     <div className="App">
//       <MainPage />
//     </div>
//   );
// }


