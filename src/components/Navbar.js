import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand" style={{'marginLeft': '20px'}}>
                Note App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" 
                    className="nav-link">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" 
                    className="nav-link">Информация</NavLink>
                </li>
                
            </ul>
        </nav>
    );
};

export default NavBar;