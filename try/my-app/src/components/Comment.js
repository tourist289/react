import React , {Component} from 'react';
import firebase from 'firebase';


class Comment extends Component{
    _removeComment( commentId , event){
        if(window.confirm("are you")){ // окно для подтверждения удаление коментария
            event.preventDefault();
            firebase.database().ref().child('comments').child(commentId).remove();
        }
    }

    render(){
        return(

            // вернет один коментарий в список коментов, в котором будет метод для удаления его из списка
            //
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