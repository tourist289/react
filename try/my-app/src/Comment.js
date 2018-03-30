import React , {Component} from 'react';



class Comment extends Component{
    render(){
        return(


            <li className="comments-item">
                <h3>{this.props.author}
                    <a href="#"> delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>


        )
    }
}


export default Comment;