let initialState=[]
let usersReducer=(state=initialState,action)=>{
switch(action.type){
    case "SET_USERS":
        return [...action.payload]
    default :
        return state
    }
}   

export default usersReducer;