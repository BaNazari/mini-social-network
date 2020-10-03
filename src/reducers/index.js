
//import { ADD_POST } from '../constants/constants';
//import {DATA_LOADED} from '../constants/constants'

const initialState = {
    posts: [],
    
};

function rootReducer(state = initialState, action) {

    if (action.type === "DATA_LOADED") {
        
        console.log("REDUCER")
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        });
    }

    return state
}


export default rootReducer
