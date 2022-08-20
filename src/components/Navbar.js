import { Link } from 'react-router-dom';
import userImg from './assets/img/user.png';

const Navbar = () => (
  <nav className="navbar">
    <h1> BookStore </h1>
    <div className="links">
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/Category" className="categories">CATEGORIES</Link>
    </div>
    <div className="user">
      <img className="user--img" src={userImg} alt="user" />
    </div>
  </nav>
);

export default Navbar;
