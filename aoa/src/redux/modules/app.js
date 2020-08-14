const initialState = {
    requestQuantity: 0,
    error: null,
};

//action types
export const types = {
    START_REQUEST: 'APP/START_REQUEST', //请求开始
    FINISH_REQUEST: 'APP/FINISH_REQUEST', //请求结束
    SET_ERROR: 'APP/SET_ERROR', //设置错误信息
    REMOVE_ERROR: 'APP/REMOVE_ERROR', //删除错误信息
};

//action creators
export const actions = {
    startRequest: () => ({
        type: types.START_REQUEST,
    }),
    finishRequest: () => ({
        type: types.FINISH_REQUEST,
    }),
    setError: error => ({
        types: types.SET_ERROR,
    }),
    removeError: () => ({
        type: types.REMOVE_ERROR,
    })
};

//reducers

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_ERROR:
            return { ...state, requestQuantity: state.requestQuantity ++ };
        case types.FINISH_REQUEST:
            return { ...state, requestQuantity: state.requestQuantity -- };
        case types.SET_ERROR:
            return { ...state, error: action.error };
        case types.REMOVE_ERROR:
            return { ...state, error: null };
        default:
            return state;
    }
};
export default reducer;

