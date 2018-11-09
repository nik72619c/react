import React from 'react';

 let hoc=(WrappedComponent)=>{

     class Hoc extends React.Component{
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

            let {someref,...rest}=this.props;
            return (
                <div>
                    <WrappedComponent {...this.state} someref={someref}  displayInAllComponents={this.displayInAllComponents.bind(this)}/>
                    {/* <button onClick={this.handleRef.bind(this)}>click me to see the ref in the console!</button> */}
                </div>
            )

            

           
        }

        
    }

    
    return React.forwardRef((props,ref)=>{
         
        return <Hoc someref={ref} {...props}/>
    })

}

export default hoc;