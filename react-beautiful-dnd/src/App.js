import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd(){

  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
      <div className="App">
      <Droppable droppableId={1}>
   {
     (provided)=>{
       return <div {...provided.droppableProps} innerRef={provided.innerRef}>
           <Draggable draggableId={1} index={1}>
             {
               (provided)=>{
                 return  <div style={{
                  border: '1px solid black',
                  padding: '10px' ,marginBottom: '3px'
                }} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>list item 1</div>
               }
             }
           </Draggable>

            <Draggable draggableId={2} index={2} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
             {
               (provided)=>{
                 return  <div style={{
                  border: '1px solid black',
                  padding: '10px' ,marginBottom: '3px'
                }} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>list item 2</div>
               }
             }
           </Draggable>

            <Draggable draggableId={3} index={3}>
             {
               (provided)=>{
                 return  <div style={{
                  border: '1px solid black',
                  padding: '10px' ,marginBottom: '3px'
                }} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>list item 3</div>
               }
             }
           </Draggable>

 
      {provided.placeholder}
       </div>
     }
   }
      </Droppable>
      </div>
      </DragDropContext>
    );
  }
}

export default App;
