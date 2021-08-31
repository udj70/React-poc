import { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import AllNews from './AllNews';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Movies from './Movies';
import Details from './Details';
class Mainrouter extends Component{
    state={
        url:'',
    }
    passUrl=(url)=>{
        this.setState({url:url})
        console.log(this.state.url)
    }
    render(){
        return(
            <div>
                <Menu/>
                    <Switch>
                        <Route exact path='/news' component={AllNews}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/' component={(props)=><Home {...props} func={this.passUrl}/>}/>
                        <Route exact path='/movies/:id' component={Movies}/>
                        <Route exact path='/details/:title/:year/:runningTime' component={(props)=><Details {...props} url={this.state.url}/>}/>
                    </Switch>
                 
            </div>

        )
    }
}
export default Mainrouter;