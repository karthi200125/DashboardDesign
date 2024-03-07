import { Link } from 'react-router-dom'
import Search from '../Search'
import User from '../User'
import './Navbar.scss'
import { GoBellFill } from 'react-icons/go'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Admin DashBoard</h1>
            <div className='scon'>
                <Search />
            </div>
            <div className='navright'>
                <Link to={'/activity'} className="bell">
                    <span></span>
                    <GoBellFill size={20} className='text-white' />
                </Link>
                <User />
            </div>
        </div>
    )
}

export default Navbar