import React, { Component } from 'react';
import CommentsList from './components/CommentsList';
import CommentsForm from './components/CommentsForm';
import firebase from 'firebase'; // ставили отдельно в нод модули



//   конфиг для подключения к базе,  // **1
// https://console.firebase.google.com/project/firstdb-98249/database/firstdb-98249/data
//   home > ( project overview ) значек настроек > настройки проекта
// из него берем apiKey  и урл из адресной панели браузера
let config = { // **1
    apiKey: 'AIzaSyD49M0QM3kN6UaEp_eARD3Kha9a4Fhwof0',
    databaseURL: "https://firstdb-98249.firebaseio.com",
};

firebase.initializeApp(config); // создается подключение к базе по адресу из конфига


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
