
const allUsers = (users)=>{
    return {type:'ALL_USER',payload:users}
}

const searchUsers= (users)=>{
    return {type:'SEARCH_USER',payload:users}
}
const deleteUser =(id)=>{
    return {type:'DELETE_USER',payload:id}
}
const update =(user)=>{
    return {type:'UPDATE',payload:user}
}


export {allUsers,searchUsers,deleteUser,update};