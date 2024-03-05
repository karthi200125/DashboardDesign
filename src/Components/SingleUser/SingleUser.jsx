import { useState } from 'react';
import './SingleUser.scss'
import { IoMdClose } from "react-icons/io";

const SingleUser = ({ user, onclose }) => {

    const handleClose = () => {
        onclose(true)
    }

    return (
        <div className='singleusercon'>
            <div className="close" onClick={handleClose}><IoMdClose /></div>
            <img src={user.img} alt="" className='useropenimage'/>
            <h1>{user.username}</h1>
            <span>{user.email}</span>
        </div>
    )
}

export default SingleUser