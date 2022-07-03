import React,{useEffect,useState} from 'react'
import './view.css';
import Movie from './Movie';
import FilterButtons from './FilterButtons';
import {motion} from "framer-motion";


const View = () => {
    const API_KEY = "ba7d84e71e73b2db36ea6c6f63a54c2d";
    const [movies,setMovies]=useState([]);
    const [filtered,setFiltered]=useState([]);
    const [activeGenre,setActiveGenre]=useState(0);
     useEffect(()=>{
     const fetchMovies=async()=>{
    const MoviesFetched= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    const _movie= await MoviesFetched.json();
    setMovies(_movie.results);
    setFiltered(_movie.results);
  }
  fetchMovies();

},[])
  return (
    <motion.div layoutclassName='view'>
        <FilterButtons activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered} movies={movies}/>
        <motion.div Layout className='grid_box'>
            {filtered.map((movie)=>{
                    return <Movie movie={movie} key={movie.id} isLarge/>
                })
            }
        </motion.div>
    </motion.div>
  )
}

export default View