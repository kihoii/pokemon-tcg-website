import React from 'react';
import { Row } from 'antd';
import './CardsPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { getCards } from '../../api/helpers.tsx';
import { useQuery } from 'react-query';

export function CardsPage(): React.JSX.Element {
  const { data: cards, error, isLoading } = useQuery('cards', getCards);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  return (
    <div className="container">
      <div className="cards-page">
        <Row gutter={16}>
          {cards?.map((item) => <CardItem key={item.id} pokemon={item} />)}
        </Row>
      </div>
    </div>
  );
}
