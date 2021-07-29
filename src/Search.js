import { Component } from "react";
import Movies from './Movies';

class Search extends Component{
    constructor(){
        super();
        this.state={

        };
    }
    handleChange=event=>{
        this.setState({movie:event.target.value})
    }
    render(){
        return(
            <div>
                <input name="movie" type="text" value={this.state.movie} onChange={this.handleChange}/>
                <div>
                    <Movies name={this.state.movie}/>
                </div>
            </div>
        )
    }

}
export default Search;