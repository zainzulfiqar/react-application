

let users = (state=[], action )=>{

switch (action.type){
    case 'ALL_USER':
    return action.payload;
    case 'SEARCH_USER':
    return action.payload;
    case 'DELETE_USER':
    let _id = action.payload;    
    state = state.filter((value)=>{
      return  value._id !== _id;
    })
    return state;
    case 'UPDATE':
    return action.payload;
    default:
    return state;
}

}

export {users};
