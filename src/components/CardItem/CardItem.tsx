import React from 'react';
import './CardItem.css';
import { Col, Card } from 'antd';
import { CardShortResponse } from '../../models/ResponseModels/CardShortResponse.tsx';

const { Meta } = Card;

export const CardItem: React.FC<{ card: CardShortResponse }> = ({ card }) => (
  <Col span={3}>
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
