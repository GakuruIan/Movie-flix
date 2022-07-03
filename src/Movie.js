import React from 'react'
import './movie.css';
import {motion} from "framer-motion";
const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Movie = ({movie,isLarge}) => {
  return (
    <motion.div layout className='movie'>
         <img className={isLarge && 'isLarge'}src={`${BASE_URL+movie.poster_path}`} alt="" />
         <h4>{movie.name || movie.title}</h4>
    </motion.div>
  )
}

export default Movie