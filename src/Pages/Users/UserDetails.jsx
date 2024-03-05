import './UserDetails.scss'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import SingleUser from '../../Components/SingleUser/SingleUser';

const UserDetails = () => {

    const users = [
        { id: '1', img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '2', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '3', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '4', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '5', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
    ]

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
                <p>20 users</p>
            </div>
            <div className="usercon">
                <div className={`singleuser ${userOpen && "useropen"}`}>
                    <SingleUser user={userD} onclose={() => setUserOpen(false)} />
                </div>

                <div className="headings">
                    <h1>No</h1>
                    <h1>UserName</h1>
                    <h1>email</h1>
                    <h1>UserId</h1>
                    <h1>Delete</h1>
                    <h1>Update</h1>
                </div>
                <div className="usersd">
                    {users.map((user) => (
                        <div className="table" key={user.key} onClick={() => HandleUserOpen(user)}>
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