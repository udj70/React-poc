import { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import AllNews from './AllNews';
import Search from './Search';
import About from './About';
import Menu from './Menu';
class Mainrouter extends Component{
    render(){
        return(
            <div>
                <Menu/>
                    <Switch>
                        <Route exact path='/news' component={AllNews}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/' component={Search}/>
                    </Switch>
                 
            </div>

        )
    }
}
export default Mainrouter;