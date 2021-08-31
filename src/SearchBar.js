import { Paper } from "@material-ui/core";
import { useEffect,useState } from "react";

import {Link} from 'react-router-dom';
import './searchBar.css';

import {IconButton} from '@material-ui/core';
import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    
  }));

const SearchBar=()=>{
    
    const [passData,setPassData]=useState("");
    
    const classes=useStyles();
   
    return(<>
                {/*<div className='search'>
                    <input type="text" value={data} onChange={(event)=>{setData(event.target.value)}} />
                    <Link to={"/movies/"+passData}>
                        <button type="submit" onClick={updateState}>Search</button>
                    </Link>
    </div>*/}

                <Paper component="form" className={classes.root}>
                   
                    <InputBase
                            className={classes.input}
                            placeholder="Search Movies"
                            inputProps={{ 'aria-label': 'search movies' }}
                            onChange={(event)=>{setPassData(event.target.value)}}
                            value={passData}
                    />
                      
                    <Link to={"/movies/"+passData}>
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Link>    
                
                
                </Paper>
                
            </>    
    )


}
export default SearchBar;