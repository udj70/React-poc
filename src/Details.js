import { useParams } from "react-router";
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import home from './home.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
      margin:'auto',
    },
    media:{
        width:'100%',
        margin:'auto'
        
    }
  });
const Details=()=>{
    const classes=useStyles();
    
    const {title,year,runningTime} =useParams();
    return(<>
                    

                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            component='img'
                            alt="Movie Image"
                            height="300"
                            image={home}
                            title="Movie Image"
                            className={classes.media}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {(title!="undefined")?title:"NA"}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Year-{(year!="undefined")?year:"NA"}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Duration-{(runningTime!="undefined")?runningTime:"NA"} mins
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>    
                    

        </>


    )
}

export default Details;