const ini_state='';
const searchNow=(state=ini_state,action)=>{
   if(action.type === 'search')
   {
    return action.data;
   }
   else
   return ini_state;
}
export default searchNow;