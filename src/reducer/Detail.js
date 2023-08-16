const detail=(state=0,action)=>{
 if(action.type === 'DETAIL')
 {
    return action.data;
 }
 else 
 return 0;
}
export default detail;