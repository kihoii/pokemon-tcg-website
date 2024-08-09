import './Logo.scss';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

export const Logo = () => {
  return (
    <Link to="">
      <img className="logo-img" src={logo} alt="Logo" />
    </Link>
  );
};
