import React ,{Component} from 'react';
// import {render} from 'react-dom';
import './index.css';
import NewPost from "./NewPost";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { comments :  [
            {text: 'hello!', value: 'Bill'},
            {text: 'How are you?', value: 'Mary'},
            {text: 'How are you 333 ?', value: 'Grathen'}
        ]};
    };

    setValue(e){
        console.log('this', this);
        console.log('setvalue', e);
        this.setState({ comments:  e.target.value });
    };
    addItem(e){
        let value = this.refs.myInputRef.value;
        console.log('addItem');
        console.log(value);
        this.setState( {articles : this.state.value });



    };
    getDataFromServer(){
        return this.state
    };
    eachTask(comment, i ) {
        return (
            <NewPost
                key={i}
                value={comment.value}
                index={i}> element number : {i}</NewPost>
        )
    }

    render(){
        const data = this.getDataFromServer();

        return (
            <div>
                <div>
                    <input ref='myInputRef' className="myinput" onChange={this.setValue} value={this.state.value}  type="text" placeholder="whats news ? "/>
                    <button onClick={this.addItem} >create news</button>
                </div>


                <ul>
                    {data.comments.map( this.eachTask )}
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
