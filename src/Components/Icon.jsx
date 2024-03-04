import React from 'react'

const Icon = ({ children }) => {
    return (
        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
            {children}
        </div>
    )
}

export default Icon