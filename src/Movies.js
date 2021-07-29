import { Component } from "react";
import {getMovies} from './apis';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            allmovies:[]
        }
    }
    componentDidMount(){
        const name=this.state.name;
        getMovies('game of').then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                this.setState({allmovies:data.results})
            }
        })
    }
    render(){
        const allmovies=this.state.allmovies.map(n=><h1>{n.title}</h1>)
        return(
            <div>
                {allmovies}
            </div>
        )

    }
    
}
export default Movies;