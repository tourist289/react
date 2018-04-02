import React , {Component} from 'react';



class Comment extends Component{
    _removeComment( commentId){
        console.log(commentId);
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