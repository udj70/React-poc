import { Component } from "react";
import {Link} from 'react-router-dom';
import './Menu.css';
class Menu extends Component{
    render(){
        return(
            <div className='navbar'>
                <Link to='/'>
                    <div className='icon'>
                        <b>Movies App</b>
                    </div>
                </Link>
                <Link to='/news'>
                    <div className='links'>Latest News</div>
                </Link>
                <Link to='/about'>
                    <div className='links'>About</div>
                </Link>
            </div>
        )
    }
}
export default Menu;