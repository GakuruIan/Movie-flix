import React from 'react'
import './options.css';


const Options = ({title,icon}) => {
  return (
    <div className='options'>
        <p> {icon} </p>
        <h4>{title}</h4>
    </div>
  )
}

export default Options