import React, { Component } from 'react';
import Comment from './Comment'
import CommentsTitle from "./CommentsTitle";
import  CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

class CommentsList extends Component {
    constructor(){
        super();

        this.state = {
            showComments: false
        }

    }

    _toggleComments(){
        this.setState({
            showComments: !this.state.showComments
        })
    }


    render() {



        let commentsList ;
        if(comments.length > 0 && this.state.showComments ) {
            commentsList = <ul className="comments-list">
                                {
                                    comments.map( (comment, index, arr ) => {
                                        return <Comment key={index} author={comment.name} text={comment.text}/>
                                    })
                                }
                            </ul>
        }



        return (
            <div className="comments-body">
                <div className="title-wrapper">
                    <CommentsTitle length={comments.length } />
                    <CommentsToggle toggleComments={this._toggleComments.bind(this)} isShow={this.state.showComments}/>

                </div>
                { commentsList }

            </div>
        )
    }
}

ReactMixin(CommentsList.prototype, ReactFireMixin)



export default CommentsList;


