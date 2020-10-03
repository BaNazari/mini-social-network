
import {DATA_LOADED} from '../constants/constants';
import {SINGLE_POST_LOADED} from '../constants/constants';

const initialState = {
    posts: [],
    singlePost: [],
};

function rootReducer(state = initialState, action) {

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        });
    }

    if (action.type === SINGLE_POST_LOADED) {
        return Object.assign({}, state, {
            singlePost: state.singlePost.concat(action.payload)
        });
    }

    return state
}


export default rootReducer
