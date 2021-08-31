import { Component } from "react";
import './News.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = (theme) => ({
    root: {
      maxWidth: 1000,
      margin:'auto'
      
    },
   
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
    
  });

class News extends Component{
    constructor(props){
        super(props);
        this.state={
            body:props.body,
            head: props.head,
            expanded:false,
            date:props.date,

        }
    }
    handleExpandClick = () => {
        this.setState({expanded:!this.state.expanded});
      };
    
      
    
      

    
    render(){
        const {classes}=this.props;
        return(
            <Card className={classes.root}>
                <CardHeader
                    
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={this.state.head}
                    subheader={this.state.date}
                />
                
               
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" >
                    <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>{this.state.body}</Typography>
                    
                    </CardContent>
                </Collapse>
    </Card>
            
            
        )
    }

}
export default withStyles(styles) (News);