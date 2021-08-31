import React, { Component } from "react";
import {allNews} from './apis';
import News from './News';
import ReactPaginate from 'react-paginate';
import './AllNews';
import {ButtonGroup} from '@material-ui/core';
import {Button} from '@material-ui/core';
import Loading from './Loading';

class AllNews extends Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            isloaded:false,
            offset:0,
            currentPage:0,
            perPage:3,
        }
       
    }
    receivedData=()=>{
                const slice=this.state.news.slice(this.state.offset,this.state.offset+this.state.perPage);
                const postData=slice.map(n=><React.Fragment>
                                                  <News body={n.body} head={n.head} date={n.publishDateTime.slice(0,10)}/>
                                            </React.Fragment>)
                this.setState({postData,
                               isloaded:true,
                               pageCount: Math.ceil(this.state.news.length / this.state.perPage)})


            
    }
    componentDidMount(){
        allNews().then((data)=>{
            this.setState({news:data.items});
            this.receivedData();
        })
    }
    handlePageClick = (e) => {
        const selectedPage = e.target.value;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset,
            isloaded:false
        }, () => {
            this.receivedData()
        });

    };
    page=()=>{
        const arr=[];
        for(var i=0;i<this.state.pageCount;i++){
            arr.push(i);
        }
        return arr;
    }
    render(){
        
        if(!this.state.isloaded){
            return(<div style={{position:'absolute',left: '50%', top: '50%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Loading/>
                    </div> 
                )
        }
        else{
            const pages=this.page();
            return(

                
                <>
                    {this.state.postData}
                    
                    
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        
                            
                                {pages.map((i=><button onClick={this.handlePageClick} value={i}>{i}</button> ))}
                            
                        
                    </ButtonGroup>
                </>
            )
        }
    }
}

export default AllNews;