const tiger = 20000;
const increase = {
    type: 'add',
};
const decrease = {
    type: 'reduce',
};
const taxes = {
    type: 'clear',
};

const reducer = (state = tiger, action) => {
    switch (action.type) {
        case 'add':
            return state += 100;
        case 'reduce':
            return state -= 100;
        case 'clear':
            return 0;
        default:
            return state;
    }
}
export default reducer;