import React from 'react';
import './AuctionPage.scss';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers';
import { auctionsMock } from '../../mock/AuctionsMock';
import { CardItem } from '../../components/CardItem/CardItem';
import { PokemonDto } from '../../interfaces/PokemonDto';

export function AuctionPage(): React.JSX.Element {
  const params = useParams();
  const auction = auctionsMock.find(
    (x) => x.id === parseInt(params.id as string, 10)
  );
  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', params.id], () =>
    getCardById(auction?.card?.id as string)
  );

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  return (
    <div>
      <Card title={'Auction: ' + auction?.id} bordered={false}>
        <CardItem key={auction?.card?.id} pokemon={card as PokemonDto} />
      </Card>
    </div>
  );
}
