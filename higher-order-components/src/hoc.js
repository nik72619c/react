import React from 'react';
var ref=React.createRef();//creating a referecne here for the container to pass on
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
                    <WrappedComponent {...this.state} ref={ref}  displayInAllComponents={this.displayInAllComponents.bind(this)}/>
                    {/* <button onClick={this.handleRef.bind(this)}>click me to see the ref in the console!</button> */}
                </div>
            )
        }
    }

    return  React.forwardRef((props,ref)=>{
        return <hoc ref={ref}/>
    });
}



export default hoc;