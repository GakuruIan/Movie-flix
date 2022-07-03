import React ,{useEffect,useState}from 'react'
import request from './request';
import axios from './axios';
import Movie from './Movie';
import './popular.css';

const Popular = () => {
     const [movies,setMovies]=useState([]);
     useEffect(()=>{
     const fetchMovies=async()=>{
     const MoviesFetched=await axios.get(request.FetchPopular);
     setMovies(MoviesFetched.data.results);
  }
  fetchMovies();
},[])
  return (
    <div className='Popular'>
        <h1>Popular </h1>
         <div className="popular_flex">
         {
            movies.map((movie,index)=>{
              return <Movie movie={movie} key={index}/>
            })
        }
         </div>
    </div>
  )
}

export default Popular