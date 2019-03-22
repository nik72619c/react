import React from 'react';
import {render,cleanup} from 'react-testing-library';
import renderer from 'react-test-renderer';

test('testing that jest runs correctly', ()=>{
    expect(2+2).toBe(4);
});
