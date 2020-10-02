import React, { Component } from "react";

class AddCommentForm extends Component {
    state = {
        comment: ""
    }

    handleChange = (event) => { 
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => { 
        event.preventDefault()
        this.props.commentForm(this.state)
        
      }

    render() {
        return (
            <div className="add-comment-form">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="inline fields">
                        <input onChange={this.handleChange} type="text" name="comment" placeholder="...add comment" />
                    </div>
                    <button className="ui button" type="submit"> Add Comment </button>
                </form>
            </div>
        );
    }
}

export default AddCommentForm;