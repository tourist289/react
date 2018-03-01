import React, {Component} from 'react';
// import {render} from 'react-dom';


class NewPost extends Component {
    render() {
        return (
            <div className="post-wrapper">
                <h2>{this.props.children}</h2>
                <h3>value :  {this.props.value}</h3>
            </div>
        );
    }
}

export default NewPost;
