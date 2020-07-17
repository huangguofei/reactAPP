const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENTS = 'ADD_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';


export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments };
}

export const addComments = (comments) => {
    return { type: ADD_COMMENTS, comments };
}

export const deleteComments = (commentIndex) => {
    return { type: DELETE_COMMENTS, commentIndex };
}