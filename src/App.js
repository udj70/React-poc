
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Mainrouter from './Mainrouter';
class App extends Component{

  render(){
    return(
      <BrowserRouter>
          <Mainrouter/>
      </BrowserRouter>  
    );
}

}


export default App;
