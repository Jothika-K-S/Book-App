import React from 'react'
import { useState } from "react"
import Options from '../common/Options';
import ThreeDot from '../common/ThreeDot';

const BookCard = ({book}) => {
  const [ShowOptions,setShowOptions] = useState(false)
  const {_id,image,title,rating} = book;
  return (
    <div className='w-[18rem] shadow-lg p-7 rounded-xl cursor-pointer hover:border border-orange-300 relative'>
      <ThreeDot setShowOptions={setShowOptions} />
      <Options ShowOptions={ShowOptions} id={_id} />
      <img src={image}/>
      <div className='flex justify-between px-2 pt-3'>
        <h3 className='text-lg'>{title}</h3>
        <p>⭐{rating}</p>
      </div>
    </div>
  )
}

export default BookCard