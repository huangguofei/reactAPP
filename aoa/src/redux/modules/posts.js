import {combineReducers} from "redux";

const initialState = {
    allIds: null,
    byId: null,
};

//action types
export const types = {
    CREATE_POST: 'POSTS/CREATE_POST',
    UPDATE_POST: 'POSTS/UPDATE_POST',
    FETCH_ALL_POSTS: 'POSTS/FETCH_ALL_POSTS',
    FETCH_POST: 'POSTS/FETCH_POST',
};

//action creators

export const actions = {
    fetchAllPosts: () => {
        return {}
    }
};


//reducers
const allIds = (state = initialState.allIds, action) => {
    switch (action.type) {
        case types.CREATE_POST:
            return [action.post.id , ...state];
        default:
            return state;
    }
};

const byId = (state = initialState.byId, action) => {
    switch (action.type) {
        case types.FETCH_ALL_POSTS:
            return action.posts;
        case types.FETCH_POST:
            return {...state, [action.post.id]: action.post };
        default:
            return state;
    }
};
const reducer = combineReducers({allIds, byId}); //合并reducer

export default reducer;