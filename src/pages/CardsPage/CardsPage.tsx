import React from 'react';
import { Row } from 'antd';
import './CardsPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { GetCards } from '../../api/helpers.tsx';
import { useQuery } from 'react-query';

export function CardsPage(): React.JSX.Element {
  const { data: cards, error, isLoading } = useQuery('cards', GetCards);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  return (
    <div>
      <div>
        <Row gutter={16}>
          {cards?.map((item) => <CardItem key={item.id} pokemon={item} />)}
        </Row>
      </div>
    </div>
  );
}
