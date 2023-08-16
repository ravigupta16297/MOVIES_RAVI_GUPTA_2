import React from 'react'
import{StarFill} from 'bootstrap-icons-react'
import { useDispatch } from 'react-redux'
import { detail } from '../action'

const Cards = (props) => {
  const dispatch=useDispatch();
  const handleClick=()=>{
    dispatch(detail(props.id));
    props.setDetail(true);
  }
  return (
    <>
    <div className='col-md-3 m-3 mx-5'>
    
    <div className="card" style={{width: '16rem'}} onClick={handleClick}>
  <img src={ props.img ? `https://image.tmdb.org/t/p/w200${props.img}`:
  'https://image.tmdb.org/t/p/w200/rcteBePazitSbPPUJCN8PMEMlaz.jpg'} 
  className="card-img-top" alt="..." style={{width:'16rem',height:'18rem'}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:'center',fontSize:'15px'}}>{props.title}<span> - {props.rating}
    <StarFill className='mb-1'/> </span></h5>
    <p className="card-text">{props.desc.slice(0,45)}...</p>
    
  </div>
</div>
</div>
    </>
  )
}

export default Cards