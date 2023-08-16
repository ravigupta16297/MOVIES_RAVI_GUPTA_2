export const search=(data)=>{
    return{
        type:'SEARCH',
        data:data
    }
}
export const detail=(data)=>{
    return{
        type:'DETAIL',
        data:data
    }
} 
export const detailempty=(data)=>{
    return {
        type:'EMPTY_DETAIL',
        data:data
    }
}
export const currPage=(data)=>{
    return{
        type:'PAGE',
        data
    }
}
export const searchBox=(data)=>{
    return{
        type:'FILTERDATA',
        data:data
    }
}
export const searchText=(data)=>{
    return {
        type:'search',
        data:data
    }
}
export const emptyText=(data)=>{
    return{
        type:'EMPTYTEXT',
        data:data
    }
}