// export const anotherName = (name) => {
//     return{
//         type:'CHANGE_MYNAME',
//         payload:name
//     }
// }

export const anotherName = () => {
    return async (dispatch)=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res= await data.json();
        dispatch({type:'CHANGE_MYNAME', payload:res[1].name})
    }
}