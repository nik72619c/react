import React from 'react';
import {Switch,Route,NavLink} from 'react-router-dom';
import Home from './pages/homePageComponent';

class App extends React.Component{

    logSomething(){
        console.log('something! ha ha');
    }
    render(){
        return(<div>
            <h1>welcome to the app</h1>
            <NavLink to="/home">go to home component</NavLink>
            <Switch>
                <Route path="/home" component={Home}/>
            </Switch>
            <button onClick={this.logSomething.bind(this).bind(this)}>console.log something !</button>
            </div>
        )
    }
}

export default App;