const wishReducer = (state=[], action) => {
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

export default wishReducer