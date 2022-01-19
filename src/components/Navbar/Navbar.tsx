import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const location = useLocation();
    
    const getClassNames = (currentPath: string, ...classNames: string[]) :string => {
        classNames.push(location.pathname === currentPath ? 'active' : '');
        return classNames.join('');
    }

    return (
        <div className='navbar'>
            <div className='navbar--logo'>Credit Check App</div>
            <div className='navbar--item'>
                <Link className={getClassNames('/')} to="/">Home</Link>
            </div>
            <div className='navbar--item'>
                <Link className={getClassNames('/credit-check')} to="/credit-check">Credit Check</Link>
            </div>
        </div>
    );
}

export  default Navbar;