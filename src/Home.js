import { Component } from "react";
import Movies from './Movies';
import home from './home.jpg';
import './home.css';
import {getMovies} from './apis'; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import {ButtonGroup} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const styles=theme=>({
    root: {
        maxWidth: 800,
        position:'relative',
        margin:'auto'
      },
    media:{
        maxWidth:190,
        margin:'auto',
        overflow:'hidden'

    }  
    });
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            isloaded:false,
            offset:0,
            currentPage:0,
            perPage:4,
            func:props.func
        }
       
    }

    receivedData=()=>{
        const {classes}=this.props;
        console.log(classes.root)
        const slice=this.state.movies.slice(this.state.offset,this.state.offset+this.state.perPage);
                const postData=slice.map(n=>(n.title || n.name)?<Link to={"/details/"+n.title+"/"+n.year+"/"+n.runningTimeInMinutes}  >
                                                                    <Card className={classes.root}>
                                                                    <CardActionArea>
                                                                    <CardMedia
                                                                            component='img'
                                                                            alt="Movie Image"
                                                                            height="300"
                                                                            image={n.image.url}
                                                                            title="Movie Image"
                                                                            className={classes.media}
                                                                        />
                                                                        <CardContent>
                                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                                {(n.title)?n.title:n.name}
                                                                            </Typography>
                                                                        
                                                                        </CardContent>
                                                                    </CardActionArea>
                                                                    
                                                                </Card>
                                                             </Link>



                                                :null)
        this.setState({postData,
                       isloaded:true,
                       pageCount: Math.ceil(this.state.movies.length / this.state.perPage)})
    }

    componentDidMount(){
        getMovies('game').then((data)=>{
            this.setState({
                movies:data.results,
            });
            this.receivedData();
            console.log(data.results.length);
        }
        

        )
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
                        
                            
                                {pages.map((i=><button onClick={this.handlePageClick} value={i}>{i+1}</button> ))}
                            
                        
                    </ButtonGroup>
                </>
            )
        }
    }

}
export default withStyles(styles)(Home);