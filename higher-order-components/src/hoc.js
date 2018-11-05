import React from 'react';

 let hoc=(WrappedComponent)=>{

    return class Hoc extends React.Component{
        constructor(props){

            super(props);
            this.state={
                name: 'a name from the HOC'
            }
            
        }

        displayInAllComponents(){
            alert('this display message was to be desplayed in every component so, it was made in the hoc..');
        }
        render(){
            return (
                <div>
                    <WrappedComponent {...this.state} displayInAllComponents={this.displayInAllComponents.bind(this)}/>
                </div>
            )
        }
    }
}

export default hoc;