import React, { Component } from 'react';
import CommentCard from '../CommentCard'

const CommentsContainer = (props) => {
    return (
        <div className="comment-cards">
            {props.comments.map(comments => <CommentCard key={comments.id} comments={comments}/>)}
        </div>
    );
}

export default CommentsContainer;