import React from 'react';
import './AuctionPage.scss';
import { useParams } from 'react-router-dom';
import { Button, Card, Flex, InputNumber, Tag } from 'antd';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers';
import { auctionsMock } from '../../mock/AuctionsMock';
import { CardItem } from '../../components/CardItem/CardItem';
import { PokemonDto } from '../../interfaces/PokemonDto';

export function AuctionPage(): React.JSX.Element {
  const params = useParams();
  const auction = auctionsMock.find((x) => x.id === +params.id!);
  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', params.id], () =>
    getCardById(auction?.card?.id as string)
  );

  if (!auction) {
    return <div>Error loading auction</div>;
  }

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  const minPrice = auction?.currentBet.price + auction?.minStep;

  return (
    <div className="auction-section">
      <Card title={'Auction: ' + auction?.id} bordered={false}>
        <div className="tag-section">
          <Flex wrap>
            {auction.isFinished ? <Tag color="red">Finished</Tag> : <></>}
            {auction.isAborted ? <Tag color="red">Aborted</Tag> : <></>}
          </Flex>
        </div>

        <div className="auction-content">
          <CardItem key={auction.card?.id} pokemon={card as PokemonDto} />
          <div className="auction-data">
            <div className="data-row">
              Card's name: <b>{auction.cardName}</b>
            </div>

            <div className="data-row">
              Owner: <b>{auction.owner?.name ?? 'unknown'}</b>
            </div>

            <div className="data-row">
              Initial cost: <b>{auction.startPrice}</b>
            </div>

            <div className="data-row">
              Current price: <b>{auction.currentBet.price}</b>
            </div>

            <div className="data-row">
              Step: <b>{auction.minStep}</b>
            </div>

            <div className="data-row">
              Active time left: <b>{auction.activeTime}</b>
            </div>

            <div className="data-row">
              Creation time: <b>{auction.createdAt}</b>
            </div>
          </div>
        </div>

        <div className="bet-section">
          <InputNumber
            addonAfter="$"
            defaultValue={minPrice}
            min={minPrice}
            step={auction.minStep}
          />
          <Button type="primary">Bet</Button>
        </div>
      </Card>
    </div>
  );
}
