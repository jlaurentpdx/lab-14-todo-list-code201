import {  } from '../app.js';
import { logIn } from '../login/login.js';
import { signUpNow } from '../login/register.js';

// Functions to test(?): 
//      findById, getUser, setUser, 
//      logIn, logOut, signUpNow(createUserObject), 
//      addTask, renderTask
//      getTask, setTask

const test = QUnit.test;

test('time to test a function', (expect) => {

    const expected = true;
    
    const actual = true;

    expect.equal(actual, expected);
});
