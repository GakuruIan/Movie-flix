import React ,{useEffect,useState}from 'react'
import './filter.css';
const FilterButtons = ({activeGenre,setActiveGenre,setFiltered,movies}) => {
useEffect(()=>{
 if(activeGenre === 0){
  setFiltered(movies)
  return;
 }
 const filtered=movies.filter((movie)=>movie.genre_ids.includes(activeGenre));
 setFiltered(filtered);
},[activeGenre])
  return (
    <div className='filter'>
    <button className={`filter_btns ${activeGenre === 0 ? 'active' : ''}`}onClick={()=>setActiveGenre(0)}>All</button>
    <button className={`filter_btns ${activeGenre === 35 ? 'active' : ''}`}onClick={()=>setActiveGenre(35)} >Comedy</button>
    <button className={`filter_btns ${activeGenre === 28 ? 'active' : ''}`} onClick={()=>setActiveGenre(28)}>Action</button>
    <button className={`filter_btns ${activeGenre === 16 ? 'active' : ''}`}onClick={()=>setActiveGenre(16)}>Animation</button>
    <button className={`filter_btns ${activeGenre === 18 ? 'active' : ''}`} onClick={()=>setActiveGenre(18)}>Drama</button>
    <button className={`filter_btns ${activeGenre === 80 ? 'active' : ''}`} onClick={()=>setActiveGenre(80)}>Crime</button>
    <button className={`filter_btns ${activeGenre === 12 ? 'active' : ''}`}onClick={()=>setActiveGenre(12)}>Adventure</button>
    <button className={`filter_btns ${activeGenre === 27 ? 'active' : ''}`}onClick={()=>setActiveGenre(27)}>Horror</button>
    </div>
  )
}

export default FilterButtons