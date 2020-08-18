import { get } from '../../utils/ajax';
import URL  from '../../utils/url';


const initialState = {
    productList: {}, //商品列表
    commentList: {}, //评论数据
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
        let productList = {};
        for(let i = 0; i < productNum; i++) {
            let id = parseInt(Math.random() * 10000);
            productList[id] = {
                id: id,
                productName: '自定义商品' + i + '号',
                price: 99,
                check: false,
                commentList: []
            }
        }
        return {
            type: types.SET_LIST,
            productList,
        }
    },
    deleteProduct: (productId) => ({
        type: types.DELETE_PRODUCT,
        id: productId,
    }),

};

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LIST:
            return {...state, productList: action.productList};
        case types.DELETE_PRODUCT:
            let _list = JSON.parse(JSON.stringify(state.productList));
            delete _list[action.id];
            return {...state, productList: _list};
        default:
            return state;
    }
}
export default reducer;