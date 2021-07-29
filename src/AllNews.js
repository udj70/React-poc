import { Component } from "react";
import {allNews} from './apis';
import News from './News';

class AllNews extends Component{

    state={
        news:[],
        isloaded:false,
    }
    componentDidMount(){
        allNews().then((data)=>{
                this.setState({news: data.items,
                               isloaded:true})
            
        })
    }

    render(){
        
        if(!this.state.isloaded){
            return(<div>Loading......</div>)
        }
        else{
            const mynews=this.state.news.map(n => <News body={n.body} head={n.head}/>);
            return(

                
                <div>
                    {mynews}
                </div>
            )
        }
    }
}

export default AllNews;