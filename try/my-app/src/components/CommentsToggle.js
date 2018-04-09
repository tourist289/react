import React, {Component} from 'react';



class CommentsToggle extends Component{
    render(){
        return (
            <button onClick={this.props.toggleComments} className="button">{this.props.isShow ? 'hide' : 'show'} comments</button>
        )
    }
}

export default CommentsToggle;