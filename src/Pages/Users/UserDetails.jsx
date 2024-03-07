import './UserDetails.scss'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import SingleUser from '../../Components/SingleUser/SingleUser';
import { USERS } from '../../dummy'

const UserDetails = () => {
    
    const [userOpen, setUserOpen] = useState(false)
    const [userD, setuserD] = useState({})

    const HandleUserOpen = (user) => {
        setUserOpen(true)
        setuserD(user)
    }

    return (
        <div className='users'>
            <div className="usertop">
                <span>All users</span>
                <p>{USERS?.length} users</p>
            </div>
            <div className="usercon">
                <div className={`singleuser ${userOpen && "useropen"}`}>
                    <SingleUser user={userD} onclose={() => setUserOpen(false)} />
                </div>

                <div className="headings">
                    <h1>No</h1>
                    <h1>UserName</h1>
                    <h1 className='udemail'>email</h1>
                    <h1 className='uduserid'>UserId</h1>
                    <h1>Delete</h1>
                    <h1>Update</h1>
                </div>
                <div className="usersd">
                    {USERS.map((user) => (
                        <div className="table" key={user.id} onClick={() => HandleUserOpen(user)}>
                            <div className='usertable' >{user.id}</div>
                            <div className='usertable'>
                                <img src={user.img} alt="" />
                                <Link to={'/profile'}>
                                    <span>{user.username}</span>
                                </Link>
                            </div>
                            <div className='usertable'>{user.email}</div>
                            <div className='usertable'>{user.id}</div>
                            <div className='usertable'>
                                <MdOutlineDeleteOutline size={20} className='icondel icon' />
                            </div>
                            <div className='usertable'>
                                <FiEdit2 size={20} className='iconedit icon' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="userbtm">
                <div className="pagination">
                    <button><FaAngleLeft /></button>
                    <span>1</span>
                    <button><FaAngleRight /></button>
                </div>
            </div>
        </div >
    )
}

export default UserDetails