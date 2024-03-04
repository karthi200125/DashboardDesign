import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <Link to={'/profile'}>
      <div className='w-[40px] h-[40px] rounded-full cursor-pointer'>
        <img src="data:image/jpeg;base64,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" alt="" className='w-full h-full object-cover' />
      </div>
    </Link>
  )
}

export default User