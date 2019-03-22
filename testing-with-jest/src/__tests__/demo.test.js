import React from 'react';
import {render,Simulate,cleanup} from 'react-testing-library';
import App from '../App';

test('check if app renders correclty',()=>{
    let component=render(<App/>);
   let el= component.getByText('Learn React');
   expect(el).toMatchSnapshot();
})