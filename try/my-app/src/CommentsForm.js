import React, { Component } from 'react';


class CommentsForm extends Component {
    render() {
        return (
                <form className="comments-form" action="">
                    <label >name
                        <input placeholder="name" type="text" id="name1" name="name"/>
                    </label>

                    <label for="textar">comment
                        <textarea placeholder="your message" name="text" id="textar"></textarea>
                    </label>
                    <input type="submit" value="post commit"/>
                </form>
        )
    }
}

export default CommentsForm;


