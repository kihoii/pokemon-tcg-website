import { AuctionCardsGrid } from '../../../../components/AuctionCardsGrid/AuctionCardsGrid';
import { AuctionResponse } from '../../../../models/ResponseModels/AuctionResponse';
import './AuctionsParticipatedTab.scss';

export const AuctionsParticipatedTab = ({
  isFinished,
  isAborted,
}: {
  isFinished?: boolean;
  isAborted?: boolean;
}) => {
  //participated query with status
  const auctions: AuctionResponse[] = [];

  return <AuctionCardsGrid auctions={auctions} />;
};
