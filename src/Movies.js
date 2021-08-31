/*import { Component } from "react";
import {getMovies} from './apis';
import './Movies.css';

class Movies extends Component{
    
    constructor({match}){
        super();
        this.state={
            name:'',
            allmovies:[],
            isLoaded: false
        }
        this.match=match
    }
    componentDidMount(){
        console.log(this.match.params.id);
        this.state.name=this.match.params.id;
        getMovies(this.state.name).then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                this.setState({allmovies:data.results,
                                isLoaded:true})
            }
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.match.params.id);
        this.state.name=this.match.params.id;
        getMovies(this.state.name).then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                this.setState({allmovies:data.results,
                                isLoaded:true})
            }
        })
    }
    
    render(){
        const allmovies=this.state.allmovies.map(n=>(n.title)?<div className='movie'><h1>{n.title}</h1></div>:null)
        if(!this.state.isLoaded){
            return(<div>Loading.....</div>)
        }
        else{
            return(
                <div>
                    {allmovies}
                </div>
            )
        }

    }
    
}
export default Movies;*/
import React from 'react';
import { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import {getMovies} from './apis';
import Loading from './Loading';
import './Movies.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      position:'relative',
      left:'20%'
    },
   
  });

const Movies=()=>{
    
    const [allmovies,setMovies]=useState([])
    const [isLoaded,setLoad]=useState(false)
    const {id}=useParams()
    useEffect(()=>{
        setLoad(false);
        getMovies(id).then((data)=>{
            setMovies(data.results);
            setLoad(true);
        })
    },[id])
    const classes=useStyles(); 
    if(!isLoaded){
        return(<div style={{position:'absolute',left: '50%', top: '50%',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                <Loading/>
               </div> 
        )
    }
    
    return(
       
      <div>
          {allmovies.map(n=>(n.title)?<Card className={classes.root}>
                                            <CardActionArea>
                                                
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {n.title}
                                                    </Typography>
                                                
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Link to={"/details/"+n.title+"/"+n.year+"/"+n.runningTimeInMinutes}>
                                                    <Button size="small" color="primary">
                                                        Learn More
                                                    </Button>
                                                </Link>
                                                
                                            </CardActions>
                                        </Card>

          
          
                                      :null)}
      </div>  
    )



}
export default Movies;




