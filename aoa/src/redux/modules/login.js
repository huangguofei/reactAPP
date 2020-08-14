import {actions as appActions} from './app';
import {post} from '../../utils/ajax';
import URL from '../../utils/url';

const initialState = {
    userId: null,
    userName: null,
};

//action types
export const types = {
    LOGIN: 'AUTH/LOGIN',
    LOGOUT: 'AUTH/LOGOUT',
};

//action creators
export const actions = {
    login: (userName, password) => {
        return dispatch => {
            dispatch(appActions.startRequest());
            const params = {userName, password};
            return post(URL.LOGIN).then(data => {
                dispatch(appActions.finishRequest());
                if(!data.error) {
                    dispatch(actions.setLoginInfo(data.userId, userName));
                } else {
                    dispatch(appActions.setError(data.error));
                }
            });
        }
    },
    logout: () => ({
        type: types.LOGOUT,
    }),
    setLoginInfo: (userId, userName) => ({
        type: types.LOGIN,
        userId,
        userName,
    }),
}

//reducers

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, userId: action.userId, userName: action.userName };
        case  types.LOGOUT:
            return { ...state, userId: null, userName: null };
        default:
            return state;
    }

}

export default  reducer;