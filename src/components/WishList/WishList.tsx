import './WishList.scss';
import React from 'react';
import { Avatar, Badge } from 'antd';
import heart from '../../assets/heart.png';

export const WishList: React.FC = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar src={heart} size="large" />
    </Badge>
  </a>
);
