import { createStore } from 'redux';

const initailState = {
    age: 20,
    isSignIn: false,
    email: ""
}

function userReducer (state = initailState, action) {
    console.log('state:',state,"action",action)
    switch(action.type){
        case "SIGN_IN":
            return {
                email: action.payload.email,
                password: action.payload.password,
                isSignIn: true,
            }
        case "SIGN_OUT":
            return {
                initailState
            }
        default: return state
    }
}

const store = createStore(userReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;