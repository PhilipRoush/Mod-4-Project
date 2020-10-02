import React, { Component } from 'react';
import AddCommentForm from './AddCommentForm';

class Movie extends Component {
    state = {
        movie: [],
        // comments: []
    }

    commentForm = (review) => { console.log(this.props.movie.id)
        fetch("http://localhost:3000/comments", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
            "movie_id": this.props.movie.id,
            "text": review.comment
            
          })
        })
        // .then(res => res.json())
        // .then(() => this.fetchTransactions())
        
      }

    render() {

        return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <img className="movie-image" src={`https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}`}></img>
                <div className="description-box">
                    <p>{this.props.movie.overview}</p>
                </div>
                <AddCommentForm commentForm={this.commentForm} movie={this.state.movie}/>
            </div>
        );
    }
}

export default Movie;