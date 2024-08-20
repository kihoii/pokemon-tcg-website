import './AuctionStatusInfo.scss';

export const AuctionStatusInfo = ({
  isFinished,
  isAborted,
}: {
  isFinished: boolean;
  isAborted: boolean;
}) => {
  if (isFinished)
    return <div className="auction-status finished-auction">Finished</div>;
  else if (isAborted)
    return <div className="auction-status aborted-auction">Aborted</div>;
  else return <div className="auction-status active-auction">Active</div>;
};
