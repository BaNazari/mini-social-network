
import {DATA_LOADED} from '../constants/constants'

const initialState = {
    posts: [],
    
};

function rootReducer(state = initialState, action) {

    if (action.type === DATA_LOADED) {
        
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        });
    }

    return state
}


export default rootReducer
