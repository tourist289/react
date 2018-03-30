import React, { Component } from 'react';


class CommentsForm extends Component {
    render() {
        return (
                <form className="comments-form" action="">
                    <label >name
                        <input type="text" id="name1" name="name"/>
                    </label>

                    <label for="textar">comment</label>
                    <textarea name="text" id="textar"></textarea>
                    <input type="submit" value="post commit"/>
                </form>
        )
    }
}

export default CommentsForm;


