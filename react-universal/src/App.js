import React from 'react';
import {Switch,Route} from 'react-router';
import Home from './pages/homePageComponent';
class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/home" component={Home}/>
            </Switch>
        )
    }
}

export default App;