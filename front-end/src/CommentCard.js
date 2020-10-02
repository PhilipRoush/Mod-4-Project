import React, { Component } from 'react';

const CommentCard = (props) => {
    return (
        
      <div>
        <div>
             <p>-{props.comments.text}</p>
        </div>
      </div>
    )

}

export default CommentCard