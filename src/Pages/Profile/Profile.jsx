import { useState } from 'react'
import { POSTS, USERS } from '../../dummy'
import './Profile.scss'

const Profile = () => {

    const [profileUser, setProfileUser] = useState(USERS[0])

    return (
        <div className='profile'>
            <div className="profiletop">
                <img src={profileUser.backgroundImage} alt="" className='backimage' />
                <div className="btm">
                    <img src={profileUser.img} alt="" />
                    <div className="profilename">
                        <div className='left'>
                            <h1>{profileUser.username}</h1>
                            <span>{profileUser.email}</span>
                        </div>
                        <button>Update</button>
                    </div>
                </div>
            </div>
            <div className="profilecontent">
                <div className="left">
                    <h1>About</h1>
                    <p>{profileUser.email}</p>
                    <p>{profileUser.country}</p>
                    <p>{ }</p>
                    <p>one</p>
                </div>
                <div className="mid">
                    {POSTS.map((post) => (
                        <div className="postcard" key={post.id}>
                            <img src={post.potsImage} alt="" />
                            <div className="btm">
                                <div className='postleft flex gap-2 flex-col'>
                                    <img src={post.postuserImage} alt="" className='w-[30px] h-[30px] rounded-full'/>
                                    <h1>{post.postUsername}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="left right">
                    <h1>Followers</h1>
                    <div className="followers">
                        {USERS.map((user) => (
                            <div className="user" onClick={() => setProfileUser(user)}>
                                <img src={user.img} alt="" />
                                <div className='de'>
                                    <span>{user.username}</span>
                                    <p>{user.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile