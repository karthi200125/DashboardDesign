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
            <img src={user.img} alt="" className='useropenimage' />
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <p>{user.country}</p>
            <div className='f'>
                <button>Follow</button>
                <p>Followes:<span>{user.Followers.length}</span></p>
            </div>
        </div>
    )
}

export default SingleUser