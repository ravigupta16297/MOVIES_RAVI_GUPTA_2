import searchData from './SearchData';
import detail from './Detail';
import page from './page';
import searchFilter from './searchFilter';
import searchNow from './SearchNow';
import { combineReducers } from 'redux';

const root=combineReducers({searchData,detail,page,searchFilter,searchNow});

export default root;
