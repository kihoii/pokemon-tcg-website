import { useLocation } from 'react-router-dom';
import { UserCard } from '../../components/UserCard/UserCard';
import { RatingHeader } from './components/RatingHeader/RatingHeader';
import { UserResponse } from '../../models/ResponseModels/UserResponse';
import './UserRatingPage.scss';

export const UserRatingPage = () => {
  console.log(useLocation().pathname);
  //we dont have backend
  const usersRatingList: UserResponse[] = [
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
    <div id="rating-page">
      <div className="page-headline container">
        <h1>User Rating</h1>
        <p>Checkout Top Users Collections</p>
      </div>
      <div className="users-container container">
        <RatingHeader />
        <RatingHeader />
        {usersRatingList.map((user, index) => (
          <UserCard
            key={`artist-${index}`}
            type="long-card"
            rating={index + 1}
            user={{ ...user }}
          /> 
        ))}
      </div>
    </div>
  );
};
