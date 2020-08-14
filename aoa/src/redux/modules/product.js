import { get } from '../../utils/ajax';
import URL  from '../../utils/url';


const initialState = {
    list: null,
};

//action types
export const types = {
    SET_LIST: 'PRODUCT/SET_LIST',
    UPDATE_LIST: 'PRODUCT/UPDATE_LIST',
    CLEAR_LIST: 'PRODUCT/CLEAR_LIST',
    DELETE_PRODUCT: 'PRODUCT/DELETE_PRODUCT',
};

//action creators
export const actions = {
    loadList: () => {
        return dispatch => {
            return get(URL.GET_COUNTRY_CODE).then(res => {
                dispatch(actions.setList(5));
            });
        }
    },
    setList: (productNum) =>{
        let list = {};
        for(let i = 0; i < productNum; i++) {
            let id = parseInt(Math.random() * 10000);
            list[id] = {
                id: id,
                productName: '自定义商品' + i + '号',
                price: 99,
                check: false,
            }
        }
        return {
            type: types.SET_LIST,
            list,
        }
    }

};

//selectors
export const getList = state => state.list;

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LIST:
            return {...state, list: action.list};
        default:
            return state;
    }
}
export default reducer;