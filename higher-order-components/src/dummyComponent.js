import React from 'react';
import hoc from './hoc';

 class DummyComponent extends React.Component{

    constructor(props){
        super(props);
        console.log("props obtained from hoc", this.props);
    }

    render(){
        return (
            <div>
                this is a dummy component ! 
             </div>
        )
    }
}

export default hoc(DummyComponent);
