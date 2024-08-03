import { UserCard, UserCardInfoDto } from '../../../../../components/UserCard/UserCard';
import './UserRating.scss';
import { Button } from 'antd';

export const UserRating = () => {
  //we dont have backend
  const usersRatingList: UserCardInfoDto[] = [
    {
      rating: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
    {
      rating: 2,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number2',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
    {
      rating: 3,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number3',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
    {
      rating: 4,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number4',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
    {
      rating: 5,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number5',
      totalCards: 100500,
      pageTitle: 'home-page',
    },
  ];

  return (
    <div id="ranking-section" className="container">
      <div className="headline">
        <div className="ranking-headline">
          <h3>User Rating</h3>
          <p>Checkout Top Users Collections</p>
        </div>
        <Button type="primary" ghost>
          View Ranking
        </Button>
      </div>
      <div className="users-container">
        {usersRatingList.map((user, index) => (
          <UserCard key={`artist-${index}`} user={{ ...user }} />
        ))}
      </div>
    </div>
  );
};
