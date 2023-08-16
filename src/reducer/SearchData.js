let ini_state=[];
const searchData=(state=ini_state,action)=>{
    if(action.type === 'SEARCH')
    {
        
        return [...action.data];
    }
    else
    return state;
}
export default searchData;