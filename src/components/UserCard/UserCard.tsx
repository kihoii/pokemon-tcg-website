import { UserResponse } from '../../models/ResponseModels/UserResponse';
import './UserCard.scss';

interface UserCardInfo {
  type: string;
  rating: number;
  user: UserResponse;
}

export function UserCard(props: UserCardInfo) {
  const { avatar, name, cards } = props.user;
  const rating = props.rating;
  const type = props.type;

  let totalCards: number;
  if (!cards) {
    totalCards = 0;
  } else {
    totalCards = cards.length;
  }

  return (
    <div className={`user-rating-card ${type}`}>
      <div className="user-card-head">
        <div className="user-rating">{rating}</div>
        <img className="user-avatar" src={avatar} alt="user-avatar" />
        <div className="user-name">{name}</div>
      </div>
      <div className="user-total-cards">
        <span>Total Cards:</span> {totalCards}
      </div>
    </div>
  );
}
