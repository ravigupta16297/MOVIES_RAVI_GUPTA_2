 const page=(state=0,action)=>
{
    if(action.type === 'PAGE')
    {
        return action.data;
    }
    else 
    return state;
}
export default page;