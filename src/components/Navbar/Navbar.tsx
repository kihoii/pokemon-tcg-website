import { Logo } from "../Logo/Logo";
import "./Navbar.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <nav>
        <NavLink to="">Marketplace</NavLink>
        <NavLink to="">Ranking</NavLink>
        <NavLink to="">Connect a wallet</NavLink>
        <Button type="primary">Sign up</Button>
      </nav>
    </div>
  );
};
