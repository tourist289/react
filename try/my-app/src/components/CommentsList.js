import React, { Component } from 'react';
import Comment from './Comment'
import CommentsTitle from "./CommentsTitle";
import CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';  // дополнительно устанавливали в нод модули
import ReactFireMixin from 'reactfire'; // дополнительно устанавливали в нод модули
import firebase from 'firebase'; // дополнительно устанавливали в нод модули

class CommentsList extends Component {
    constructor(){
        super();

        this.state = {
            showComments: true,
            comments: []
        }

    }

    componentDidMount() {
        // использование миксинов из ReactFireMixin
        this.bindAsArray(firebase.database().ref().child('comments'), 'comments');
    }

    _toggleComments(){  // показать скрыть комены
        this.setState({
            showComments: !this.state.showComments
        })
    }


    render() {

        const commetsCount = this.state.comments.length;

        let commentsList ;
        if(commetsCount > 0 && this.state.showComments ) {
            commentsList = <ul className="comments-list">
            {
               this.state.comments.map( (comment, index, arr ) => {
                    return <Comment id={comment['.key']} key={index} author={comment.name} text={comment.text}/>
                })
            }
            </ul>
        }

        // строим страницу из частей
        // CommentsTitle - блок с таитлом и кол-вом коментов
        // CommentsToggle - кнопка скрыть/показать список коментов
        //  { commentsList } - переменая выводящая список коментариев
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

// использование миксинов из ReactFireMixin возможно с использованием библиотеки ReactMixin
ReactMixin(CommentsList.prototype, ReactFireMixin);


export default CommentsList;


