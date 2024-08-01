import { useEffect, useState } from 'react';
import { UserCard, UserCardInfoDto } from '../../../../../components/UserCard/UserCard';
import './UserRating.scss';
import { UserDto } from '../../../../../models/UserDto';
import { Button } from 'antd';

export const UserRating = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const usersRatingList: UserCardInfoDto[] = [
    {
      rating: 1,
      avatar: '',
      name: 'number1',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
  ];

  setUsers(usersRatingList);

  return (
    <div id="ranking-section" className="container">
      <div className="ranking-headline">
        <div className="headline">
          <h3>User Rating</h3>
          <p>Checkout Top Users Collections</p>
        </div>
        <Button type="primary">See All</Button>
      </div>
      <div className="users-container">
        {users.map((user, index) => (
          <UserCard key={`artist-${index}`} user={{ rating: index + 1, ...user, pageTitle: 'home-page' }} />
        ))}
      </div>
    </div>
  );
};
