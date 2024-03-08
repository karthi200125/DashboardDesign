import { FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import { SiDatabricks } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import './MobNav.scss';
import { Link, useLocation } from "react-router-dom";


const MobNav = () => {

    const routes = [
        { href: "/", name: "Home", icon: <GiElectric size={20} className='bg-transparent' /> },
        { href: "/users", name: "Users", icon: <FaUsers size={20} className='bg-transparent' /> },
        { href: "/posts", name: "Posts", icon: <SiDatabricks size={20} className='bg-transparent' /> },
        { href: "/activity", name: "Activity", icon: <LuMessagesSquare size={20} className='bg-transparent' /> },
        { href: "/profile", name: "Profile", icon: <FaRegUser size={20} className='bg-transparent' /> },
        { href: "/logout", name: "Logout", icon: <TbLogout size={20} className='bg-transparent' /> },
    ]

    const location = useLocation()
    const pathname = location.pathname

    return (
        <div className="mobnav">
            {routes.map((r) => (
                <Link to={r.href} className="mobnavicon" key={r.href} style={{ backgroundColor: pathname === r.href && '#6e53de' }}>
                    <div>{r.icon}</div>
                    {pathname === r.href &&
                        <p>{r.name}</p>
                    }
                </Link>
            ))}
        </div>
    )
}

export default MobNav