import './RatingHeader.scss';

export const RatingHeader = () => {
  return (
    <div className="rating-header">
      <div className="left">
        <div>#</div>
        <div>User</div>
      </div>
      <div className="right">Total Cards</div>
    </div>
  );
};
