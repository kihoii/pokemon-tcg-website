import { Logo } from '../Logo/Logo';
import './Navbar.scss';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { WishList } from '../WishList/WishList';
import { getItem, removeItem } from '../../services/localStorageService';
import { accessApiToken } from '../../store/localStorageKeys';

const items: MenuProps['items'] = [
  {
    label: (
      <NavLink className="nav-link" to="/auctions/participated">
        Participated
      </NavLink>
    ),
    key: '0',
  },
  {
    label: (
      <NavLink className="nav-link" to="/auctions/created">
        Created
      </NavLink>
    ),
    key: '1',
  },
];
export const Navbar = () => {
  const token = getItem<string>(accessApiToken, '');

  function signOutOnClick() {
    removeItem(accessApiToken);
    window.location.assign('/');
  }

  return (
    <div className="navbar">
      <Logo />
      <nav>
        {token ? (
          <NavLink className="nav-link" to="/auctions">
            Auctions
          </NavLink>
        ) : (
          <></>
        )}
        <NavLink className="nav-link" to="/cards">
          Card Collection
        </NavLink>
        <NavLink className="nav-link" to="/ranking">
          Ranking
        </NavLink>
        <WishList />
        {token ? (
          <>
            <Dropdown className="nav-link" menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  My auctions
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Button type="primary" danger onClick={signOutOnClick}>
              Sign out
            </Button>
          </>
        ) : (
          <Button type="primary" href="/sign-up">
            Sign up
          </Button>
        )}
      </nav>
    </div>
  );
};
