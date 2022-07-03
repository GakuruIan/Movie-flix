import React,{useEffect,useState} from 'react'
import './banner.css';
import axios from './axios';
import request from './request';
import Navbar from './Navbar';
import { BiPlay ,BiPlus} from "react-icons/bi";

const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
       const fetchData=async()=>{
           const MovieRequest=await axios.get(request.FetchNetOrginals)
           setMovie(MovieRequest.data.results[ Math.floor(Math.random()*MovieRequest.data.results.length-1)]);
       }
       fetchData();
  
    },[]);
    function truncate(str,n){
      return str?.length>n? str.substr(0,n-1) +"...":str;
    }
  return (
    <div className='banner'
      style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}
    >
      <div className='overlay'></div>
       <Navbar />
      <div className="content">
      <h1>{movie.name}</h1>
      <p>{truncate(movie?.overview,150)}</p>
      <div className="btns">
        <button className="btn">Play </button>
        <button className="btn">List </button>
      </div>
      </div>
    </div>
  )
}
  
export default Banner