import { Logo } from "../Logo/Logo";
import "./Navbar.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <nav>
        <NavLink className="nav-link" to="/market">
          Marketplace
        </NavLink>
        <NavLink className="nav-link" to="/ranking">
          Ranking
        </NavLink>
        <NavLink className="nav-link" to="/wallet">
          Connect a wallet
        </NavLink>
        <NavLink className="nav-link" to="/auction">
        Auction
        </NavLink>
        <Button type="primary" href="/sign-up">
          Sign up
        </Button>
      </nav>
    </div>
  );
};
