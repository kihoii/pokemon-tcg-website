import { AuctionCardsGrid } from '../../components/AuctionCardsGrid/AuctionCardsGrid';
import { auctionsMock } from '../../mock/AuctionsMock';
import './AuctionMarketplacePage.scss';

export const AuctionMarketplacePage = () => {
  const auctions = auctionsMock.filter(
    (auction) => !auction.isAborted && !auction.isFinished
  );

  return (
    <div className="auction-market-page">
      <div className="auction-market-cards container">
        <h2>Auctions Market</h2>
        <AuctionCardsGrid auctions={auctions} />
      </div>
    </div>
  );
};
