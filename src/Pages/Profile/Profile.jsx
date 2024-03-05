import './Profile.scss'

const Profile = () => {

    const users = [
        { id: '1', img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '2', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '3', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '4', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
        { id: '5', img: "", username: "karthkeyan", UserId: "1234567890", email: "skarthkeyN@mail.com" },
    ]

    return (
        <div className='profile'>
            <div className="profiletop">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='backimage' />
                <div className="btm">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="profilename">
                        <div className='left'>
                            <h1>karthikeyan</h1>
                            <span>skarhtikeyan@gmail.com</span>
                        </div>
                        <button>Update</button>
                    </div>
                </div>
            </div>
            <div className="profilecontent">
                <div className="left">
                    <h1>About</h1>
                    <p>one</p>
                    <p>one</p>
                    <p>one</p>
                    <p>one</p>
                </div>
                <div className="mid">mid</div>
                <div className="left right">
                    <h1>Followers</h1>
                    <div className="followers">
                        {users.map((user) => (
                            <div className="user">
                                <img src={user.img} alt="" />
                                <div className='de'>
                                    <span>{user.username}</span>
                                    <p>developer</p>
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