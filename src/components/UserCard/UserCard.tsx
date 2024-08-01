import './UserCard.scss';

interface UserCardInfo {
  user: UserCardInfoDto;
}

export interface UserCardInfoDto {
  rating: number;
  avatar: string;
  name: string;
  totalCards: number;
  pageTitle: string;
}

export function UserCard({ user }: UserCardInfo): React.JSX.Element {
  const { rating, avatar, name, totalCards, pageTitle } = user;

  return (
    <div className={`user-rating-card ${pageTitle}`}>
      <div className="user-rating">{rating}</div>
      <img className="user-avatar" src={avatar} alt="user-avatar" />
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-total-cards">
          <span>Total Cards:</span> {totalCards}
        </div>
      </div>
    </div>
  );
}
