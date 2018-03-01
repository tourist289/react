import React ,{Component} from 'react';
// import {render} from 'react-dom';
import './index.css';
import NewPost from "./NewPost";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setValue = (e) => {
        console.log('setvalue');
        this.setState({value : e.target.value });
    };
    addItem = (e) => {
        console.log('addItem');
        console.log(this.state.value);
        this.setState({articles : this.state.value });

    };
    getDataFromServer = () =>  [this.state];


    render() {
        const comments = this.getDataFromServer();
        // [
        //     {text: 'hello!', value: 'Bill'},
        //     {text: 'How are you?', value: 'Mary'},
        //     {text: 'How are you 333 ?', value: 'Grathen'}
        // ];


        return (
            <div>
                <div>
                    <input className="myinput" onChange={this.setValue} value={this.state.value}  type="text" placeholder="whats news ? "/>
                    <button onClick={this.addItem} >create news</button>
                </div>


                <ul>
                    {comments.map( (comment, i ) => {
                        return <NewPost key={i} value={comment.value} >element number : {i}</NewPost>;
                    })}
                </ul>
            </div>
        );
    }



        // return (
        //     <div>
        //
        //         <input className="myinput" onChange={this.setValue} value={this.state.value}  type="text" placeholder="whats news ? "/>
        //         <button onClick={this.addItem} >create news</button>
        //
        //         {articles.map(comment => {
        //             return <Comment author={comment.author} text={comment.text} />;
        //         })}
        //         <NewPost value={this.state.value}/>
        //
        //         {/*{props.children}*/}
        //
        //
        //
        //     </div>
        // )
    // }
}

export default App;
