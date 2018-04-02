import React, { Component } from 'react';
import Comment from './Comment'
import CommentsTitle from "./CommentsTitle";
import  CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

class CommentsList extends Component {
    constructor(){
        super();

        this.state = {
            showComments: false,
            comments: []
        }

    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('comments'), 'comments');
    }

    _toggleComments(){
        this.setState({
            showComments: !this.state.showComments
        })
    }


    render() {



        let commentsList ;
        if(this.state.comments.length > 0 && this.state.showComments ) {
            commentsList = <ul className="comments-list">
                                {
                                   this.state.comments.map( (comment, index, arr ) => {
                                        return <Comment id={comment['.key']} key={index} author={comment.name} text={comment.text}/>
                                    })
                                }
                            </ul>
        }



        return (
            <div className="comments-body">
                <div className="title-wrapper">
                    <CommentsTitle length={this.state.comments.length } />
                    <CommentsToggle toggleComments={this._toggleComments.bind(this)} isShow={this.state.showComments}/>

                </div>
                { commentsList }

            </div>
        )
    }
}

ReactMixin(CommentsList.prototype, ReactFireMixin);



export default CommentsList;


