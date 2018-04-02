import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyD49M0QM3kN6UaEp_eARD3Kha9a4Fhwof0',
    databaseURL: "https://firstdb-98249.firebaseio.com",
};

firebase.initializeApp(config);


class App extends Component {
  render() {

    return (
        <div className="container">
            <div className="comments-box">
                <CommentsForm/>
                <CommentsList/>
            </div>

        </div>

    );
  }
}

export default App;
