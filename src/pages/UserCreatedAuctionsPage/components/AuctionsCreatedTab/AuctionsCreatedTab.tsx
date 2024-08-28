import { AuctionCardsGrid } from '../../../../components/AuctionCardsGrid/AuctionCardsGrid';
import { auctionsMock } from '../../../../mock/AuctionsMock';
import './AuctionsCreatedTab.scss';

export const AuctionsCreatedTab = ({
  isFinished,
  isAborted,
}: {
  isFinished?: boolean;
  isAborted?: boolean;
}) => {
  const ownerId = 2;
  //created query with status
  console.log(isAborted == true);
  console.log(isFinished == true);
  const auctions = auctionsMock.filter(
    (auction) =>
      auction.owner!.id == ownerId &&
      (isFinished != undefined ? auction.isFinished == isFinished : true) &&
      (isAborted != undefined ? auction.isAborted == isAborted : true)
  );

  return <AuctionCardsGrid auctions={auctions} />;
};
