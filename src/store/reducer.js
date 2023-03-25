
const initialState = {
    value: '', 
    btns: ["C", "+-", "%", "/",7, 8, 9, "X",4, 5, 6, "-",1, 2, 3, "+",0, ".", "="]
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'DISPLAY_NUMBERS':
            return{
                ...state,
                value: state.value + action.value
            }
        case 'COUNT_NUMBERS':
            return{
                ...state,
                value: eval(state.value)
            }
        case 'RESET':
            return{
                ...state,
                value: ''
            }
        default:
            return state;
    }
}


export default reducer;
