import { useParams } from 'react-router-dom';
import './UserAuctionsPage.scss';
import { auctionsMock } from '../../mock/AuctionsMock';
import { AuctionCard } from '../../components/AuctionCard/AuctionCard';

export const UserAuctionsPage = () => {
  const params = useParams();
  const userAuctions = auctionsMock.filter(
    (auction) => auction.owner!.id == Number(params.id)
  );

  return (
    <div className="user-auctions-page">
      <div className="card-holder container">
        {userAuctions.map((auction, index) => (
          <AuctionCard key={index} auction={auction} />
        ))}
      </div>
    </div>
  );
};
