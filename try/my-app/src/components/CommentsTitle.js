import React, {Component} from 'react';


class CommentsTitle extends Component{
    _getCommentsTitle( commentsCounter ){
        if(commentsCounter == 0){
            return 'No comments yet';
        } else if(commentsCounter == 1) {
            return '1 comment';
        } else {
            return `${commentsCounter} comments`;
        }
    }


    render(){
        return(
            <div className="comments-title"><h3>{this._getCommentsTitle(this.props.length)} </h3></div>
        )
    }
}



export default CommentsTitle;