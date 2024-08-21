import { Logo } from "../Logo/Logo";
import "./Navbar.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <NavLink className="nav-link" to="/auction-buy">
        Buy
        </NavLink>
    ),
    key: '0',
  },
  {
    label: (
      <NavLink className="nav-link" to="/auction-sale">
        Sale
        </NavLink>
    ),
    key: '1',
  },
  
];
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
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            Auction
              <DownOutlined />
            </Space>
    </a>
  </Dropdown>
        <Button type="primary" href="/sign-up">
          Sign up
        </Button>
      </nav>
    </div>
  );
};
