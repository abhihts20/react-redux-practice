const initialState = {
    name:"abhinav",
    wishes:["eat","code"]
}

const nameReducer = (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'CHANGE_MYNAME':
            return {
                ...state,
                name:action.payload
            }
            default:
                return state
    }
}

export default nameReducer