import './AuctionCard.scss';
import { AuctionResponse } from '../../models/ResponseModels/AuctionResponse';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { AuctionStatusInfo } from '../AuctionStatusInfo/AuctionStatusInfo';
import { usersMock } from '../../mock/UsersMock';
import { Link } from 'react-router-dom';

export const AuctionCard = ({ auction }: { auction: AuctionResponse }) => {
  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', auction.card!.id], () => getCardById(auction.card!.id));
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  auction.card = card;
  auction.owner = usersMock[auction.owner!.id - 1];

  return (
    <div
      className="auction-card"
      onClick={() => window.location.assign('/auction/' + auction.id)}
    >
      <img
        className="img"
        alt={auction.card!.name}
        src={auction.card!.images!.small}
      />
      <div className="auction-card-body">
        <div className="auction-card-header">
          <div className="auction-base-info">
            <div className="auction-id">id: {auction.id}</div>
            <div className="auction-owner">
              owner:
              <Link to={`user/${auction.owner.id}`}>{auction.owner.name}</Link>
            </div>
          </div>
          <AuctionStatusInfo
            isAborted={auction.isAborted!}
            isFinished={auction.isFinished!}
          />
        </div>
        <hr />
        <div className="auction-card-info">
          <div className="auction-info">
            <p>
              Current Price: <span>{auction.currentPrice}</span>
            </p>
            <p>
              Min Step: <span>{auction.minStep}</span>
            </p>
          </div>
          {!auction.isFinished && !auction.isAborted ? (
            <CountdownTimer
              dateFrom={auction.createdAt!}
              activeTime={Number(auction.activeTime)}
            />
          ) : (
            <div className="auction-time-is-up">Time Is Up</div>
          )}
        </div>
      </div>
    </div>
  );
};
