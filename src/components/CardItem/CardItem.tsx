import React, { useState, useEffect } from 'react';
import './CardItem.scss';
import { Col, Card } from 'antd';
import { CardShortResponse } from '../../models/ResponseModels/CardShortResponse.tsx';

const { Meta } = Card;

export const CardItem: React.FC<{ card: CardShortResponse }> = ({ card }) => {
  const [columnSpan, setColumnSpan] = useState(getColumnSpan());

  useEffect(() => {
    const handleResize = () => {
      setColumnSpan(getColumnSpan());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getColumnSpan() {
    const width = document.documentElement.clientWidth;
    if (width < 1440) {
      return 6;
    } else if (1440 <= width) {
      return 3;
    }
  }

  return (
    <Col span={columnSpan}>
      <Card
        hoverable={true}
        onClick={() => window.location.assign('/card/' + card.id)}
        className="pokemon-card"
        title={card.name}
        bordered={false}
        cover={<img className="img" alt={card.id} src={card.images!.small} />}
      >
        {card.rarity}
        <Meta title={card.artist} description={card.flavorText} />
      </Card>
    </Col>
  );
};
