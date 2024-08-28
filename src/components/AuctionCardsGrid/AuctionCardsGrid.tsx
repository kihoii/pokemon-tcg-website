import { Empty } from 'antd';
import { AuctionResponse } from '../../models/ResponseModels/AuctionResponse';
import { AuctionCard } from '../AuctionCard/AuctionCard';
import './AuctionCardsGrid.scss';

export const AuctionCardsGrid = ({
  auctions,
}: {
  auctions: AuctionResponse[];
}) => {
  return (
    <>
      {auctions.length != 0 ? (
        <div className="auction-card-holder">
          {auctions.map((auction, index) => (
            <AuctionCard key={index} auction={auction} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};
