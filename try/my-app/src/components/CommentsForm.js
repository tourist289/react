import React, { Component } from 'react';
import firebase from 'firebase';


class CommentsForm extends Component {
    // метод срабатывает на сабмит формы, // **5
    // если заполнены все поля, **2
    // делает пуш в базу **3 в массив коментариев нового коментария **1
    // обнуляет значения в инпутах **4
    _submitForm(e){
        e.preventDefault();
        if(this._author.value.length && this._comment.value.length){ // **2
            const comment = { // **1
                name: this._author.value,
                text: this._comment.value
            };
            firebase.database().ref().child('comments').push(comment).then(() =>  // **3
            { // **4
                this._author.value = '';
                this._comment.value = '';
            });
        }
    }
    render() {
        return (
                <form className="comments-form" action=""
                 onSubmit={this._submitForm.bind(this)}> // **5
                    <label htmlFor="name1">name
                        <input  ref={input => this._author = input} placeholder="name" type="text" id="name1" name="name"/>
                    </label>

                    <label htmlFor="textar">comment
                        <textarea ref={textarea => this._comment = textarea} placeholder="your message" name="text" id="textar"></textarea>
                    </label>
                    <input type="submit" value="post commit"/>
                </form>
        )
    }
}

export default CommentsForm;


