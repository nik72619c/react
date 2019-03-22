import React from 'react';
import {render,Simulate,cleanup,fireEvent} from 'react-testing-library';
import App from '../App';

test('check if app renders correclty',()=>{
    let component=render(<App/>);
//    let el= component.getByText('Learn React');
//    expect(el).toMatchSnapshot();
let result=fireEvent.click(component.getByText('Learn React'));
console.log(result);
expect(fireEvent.click(component.getByText('Learn React'))).toBe(true);
});

