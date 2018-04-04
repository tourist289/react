import React , {Component} from 'react';

import firebase from 'firebase';


class Comment extends Component{
    _removeComment( commentId){
        if(window.confirm("are you")){
            event.preventDefault();
            firebase.database().ref().child('comments').child(commentId).remove();
        }
    }

    render(){
        return(
            <li className="comments-item">
                <h3>{this.props.author}
                    <a onClick={this._removeComment.bind(this, this.props.id)} href="#"> delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>


        )
    }
}


export default Comment;