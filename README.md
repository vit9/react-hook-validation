# react-custom-hook-validation

Make the validation simple again

## Installation

npm i react-custom-hook-validation

## Usage 

### example config
 ```js
 const config = {
        login: {
            id: 1,
            title: 'login',
            maxLength: 15,
            minLength : 3,
            value: null,
            type: 'number',
            required: true,
            errors: {
                minLength: 'error message for min length',
                maxLegnth: 'error message for max length',
                value: 'error message for value',
                isNumber: 'should be number'
            }
        },
        password: {
            id: 2,
            title: 'password',
            maxLength: 10,
            minLength : 6,
            value: null,
            required: true,
            errors: {
                minLength: 'error message for min length',
                maxLegnth: 'error message for max length',
                value: 'error message for value',
                isNumber: 'should be number'
            }
        },
        email: {
            id: 3,
            title: 'email',
            maxLength: 7,
            minLength : 3,
            regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            value: null,
            errors: {
                minLength: 'error message for min length',
                maxLegnth: 'error message for max length',
                value: 'error message for value',
                isNumber: 'should be number'
            }
        }
    }
   ```
### useValidation 
 ```js
    const [login, password, email, fieldValues, changeHandler, startValidation] = useValidation(config);
 ```
```diff
- Consistently returns the object of each field from config.
Last two elements are the functions - 
    changeHandler - takes one argument - event from inout tag
    startValidation - takes one argument - callback function, it return two params:
        config and error - if there are errors after validation this params will have value true
```

### input props 

```js
 <input onChange={(event) => changeHandler(event)} placeholder='login' name='login' value={fieldValues.login.value || ''}/>
```
```diff
- Necessary to add name prop for correct work;
!Add check value prop because react show warning in the console
```


### code example 

```js
import React from 'react';
import useValidation from 'react-custom-hook-validation';

export default function ValidationExample({ history }) {
    const config = {
        login: {
            id: 1,
            title: 'login',
            maxLength: 15,
            minLength : 3,
            value: null,
            type: 'number',
            required: true,
            errors: {
                minLength: 'not be less then',
                maxLength: 'not be bigger then',
                value: 'not be empty',
                isNumber: 'should be number'
            }
        },
        password: {
            id: 2,
            title: 'password',
            maxLength: 10,
            minLength : 6,
            value: null,
            required: true,
            errors: {
                minLength: 'not be less then',
                maxLength: 'not be bigger then',
                value: 'not be empty'
            }
        },
        email: {
            id: 3,
            title: 'email',
            maxLength: 7,
            minLength : 3,
            regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            value: null,
            errors: {
                minLength: 'not be less then',
                maxLength: 'not be bigger then',
                value: 'not be empty',
                regexp: 'incorrect validation'
            }
        }
    }
    const [login, password, email, fieldValues, changeHandler, startValidation] = useValidation(state);

    const sigIn = (config, error) => {
        
        // some code here
    }
    
    return (
        <>
            <input onChange={(event) => changeHandler(event)} placeholder={'login'} name='login' value={fieldValues.login.value || ''}/>
            <label>{login?.errors}</label>
            <input onChange={(event) => changeHandler(event)} placeholder={'password'} name='password' value={fieldValues.password.value || ''}/>
            <label>{password?.errors}</label>
            <input onChange={(event) => changeHandler(event)} placeholder={'email'} name='email' value={fieldValues.email.value || ''}/>
            <label>{email?.errors}</label>
            <button onClick={() => startValidation(sigIn)}>login</button>
        </>
    )
}
```
