import React from 'react'
import Banner from './Banner'
import Popular from './Popular';
import View from './View';
const Movieview = () => {
  return (
    <div className='movieview'>
         <Banner/>
         <Popular />
         <View />
    </div>
  )
}

export default Movieview