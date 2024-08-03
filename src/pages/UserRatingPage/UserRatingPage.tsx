import { useLocation } from 'react-router-dom';
import { UserCard, UserCardInfoDto } from '../../components/UserCard/UserCard';
import './UserRatingPage.scss';
import { RatingHeader } from './components/RatingHeader/RatingHeader';

export const UserRatingPage = () => {
  console.log(useLocation().pathname);
  //we dont have backend
  const usersRatingList: UserCardInfoDto[] = [
    {
      rating: 1,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number1',
      totalCards: 100500,
      pageTitle: 'rating-page',
    },
    {
      rating: 2,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number2',
      totalCards: 100500,
      pageTitle: 'rating-page',
    },
    {
      rating: 3,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number3',
      totalCards: 100500,
      pageTitle: 'rating-page',
    },
    {
      rating: 4,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number4',
      totalCards: 100500,
      pageTitle: 'rating-page',
    },
    {
      rating: 5,
      avatar: 'src/components/UserCard/avatar-template.jpg',
      name: 'number5',
      totalCards: 100500,
      pageTitle: 'rating-page',
    },
  ];

  return (
    <div id="rating-page">
      <div className="page-headline container">
        <h1>User Rating</h1>
        <p>Checkout Top Users Collections</p>
      </div>
      <div className="users-container container">
        <RatingHeader />
        <RatingHeader />
        {usersRatingList.map((user, index) => (
          <UserCard key={`artist-${index}`} user={{ ...user }} />
        ))}
      </div>
    </div>
  );
};
