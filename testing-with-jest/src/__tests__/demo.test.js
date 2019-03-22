import React from 'react';
import {render,Simulate,cleanup,fireEvent, getByText} from 'react-testing-library';
import App from '../App';
import TestRenderer from 'react-test-renderer';

test('check if app renders correclty',()=>{
    let component=render(<App/>);
//    let el= component.getByText('Learn React');
//    expect(el).toMatchSnapshot();

fireEvent.click(component.getByText('Learn React'));
let dom=TestRenderer.create(<App/>);
let tree=dom.toJSON();
// let element=tree.children.filter(domElement=>domElement.props.className==='App-link');
expect(dom).toMatchSnapshot();
});

