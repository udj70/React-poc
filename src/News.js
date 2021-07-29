import { Component } from "react";
import './News.css';

class News extends Component{
    constructor(props){
        super(props);
        this.state={
            body:props.body,
            head: props.head,
        }
    }

    
    render(){
        return(
            <div className='main'>
                <h2> {this.state.head}</h2>
                {this.state.body}
            </div>
        )
    }

}
export default News;