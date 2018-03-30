import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

class App extends Component {
  render() {

    return (
        <div className="comments-box">
            <div className="container">
                <CommentsForm/>
                <CommentsList/>
            </div>

        </div>

    );
  }
}

export default App;
