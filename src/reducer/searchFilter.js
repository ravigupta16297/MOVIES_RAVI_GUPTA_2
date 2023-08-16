const searchFilter=(state=[],action)=>{
    if(action.type === 'FILTERDATA')
    {
        return action.data;
    }
    else
    return state;

}
export default searchFilter;