import { UserCard } from '../../../../components/UserCard/UserCard';
import { UserResponse } from '../../../../models/ResponseModels/UserResponse';
import './UserRating.scss';
import { Button } from 'antd';

export const UserRating = () => {
  //we dont have backend
  const usersRatingList: UserResponse[] = [
    {
      id: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
    },
    {
      id: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      cards: [
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
      ],
    },
    {
      id: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      cards: [
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
      ],
    },
    {
      id: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      cards: [
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
      ],
    },
    {
      id: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      cards: [
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
        { id: '1', name: 'd', image: 'd', rarity: 'd' },
      ],
    },
  ];

  return (
    <section id="ranking-section" className="container">
      <div className="ranking-headline">
        <div className="headline">
          <h3>User Rating</h3>
          <p>Checkout Top Users Collections</p>
        </div>
        <Button type="primary" ghost>
          View Ranking
        </Button>
      </div>
      <div className="users-container">
        {usersRatingList.map((user, index) => (
          <UserCard
            key={`artist-${index}`}
            type="short-card"
            rating={index + 1}
            user={{ ...user }}
          />
        ))}
      </div>
    </section>
  );
};
