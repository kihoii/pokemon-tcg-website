import './WishList.scss';
import React from 'react';
import { Avatar, Badge } from 'antd';
import heart from '../../assets/heart.png';
import { useAppSelector } from '../../store/hooks';

export const WishList: React.FC = () => {
  const count = useAppSelector((state) => state.wishList.count);
  if (count === 0) {
    return <></>;
  }

  return (
    <a href="/wish-list">
      <Badge count={count}>
        <Avatar src={heart} size="large" />
      </Badge>
    </a>
  );
};
