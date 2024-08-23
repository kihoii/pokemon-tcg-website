import React, { useEffect, useState } from 'react';
import './AuctionPage.scss';
import { useParams } from 'react-router-dom';
import { Button, Card, Flex, InputNumber, Steps, Tag } from 'antd';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers';
import { auctionsMock } from '../../mock/AuctionsMock';
import { CardItem } from '../../components/CardItem/CardItem';
import { PokemonDto } from '../../interfaces/PokemonDto';
import { auctionSteps } from '../../store/auctionSteps';
import { BetShortResponseMock } from '../../mock/BetShortResponseMock';

export function AuctionPage(): React.JSX.Element {
  const params = useParams();
  const auction = auctionsMock.find((x) => x.id === +params.id!);
  const [bets, setBets] = useState(BetShortResponseMock);
  const [currentBetPrice, setCurrentBetPrice] = useState(
    auction?.currentBet?.price
  );
  const [minPrice, setMinPrice] = useState(
    auction?.currentBet?.price! + auction?.minStep!
  );
  const [activeTime, setActiveTime] = useState(auction?.activeTime);
  const [auctionState, setAuctionState] = useState(
    auction?.currentBet?.id ? 1 : 0
  );

  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', params.id], () =>
    getCardById(auction?.card?.id as string)
  );

  useEffect(() => {
    if (!auction) return;

    setMinPrice(auction.startPrice! + auction.minStep);
    const auctionFinishedDate = new Date(auction.createdAt!);
    auctionFinishedDate.setHours(auctionFinishedDate.getHours() + activeTime!);

    if (auctionFinishedDate < new Date()) {
      auction.isFinished = true;
      setAuctionState(2);
    }
  }, [auction]);

  if (!auction) {
    return <div>Error loading auction</div>;
  }

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  function onClickMakeBet() {
    const newBet = {
      id: bets.length + 1,
      price: +(
        (auction?.currentBet?.price! ?? auction?.startPrice) + auction!.minStep
      ).toFixed(2),
      userId: 1,
    };

    setBets((prevBets) => [...prevBets, newBet]);
    if (auction) {
      auction.currentBet = newBet;
      auction.activeTime = 24;
      setAuctionState(1);
      setCurrentBetPrice(newBet.price);
      setMinPrice(+(newBet.price + auction.minStep).toFixed(2));
      setActiveTime(auction.activeTime);
    }
  }

  return (
    <div className="auction-section">
      <Card title={'Auction: ' + auction.id} bordered={false}>
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

            {currentBetPrice ? (
              <div className="data-row">
                Current price: <b>{currentBetPrice}</b>
              </div>
            ) : (
              <></>
            )}

            <div className="data-row">
              Step: <b>{auction.minStep}</b>
            </div>

            {auction.isFinished || auction.isAborted ? (
              <></>
            ) : (
              <>
                <div className="data-row">
                  Active time left: <b>{activeTime}</b>
                </div>

                <div className="data-row">
                  Creation time: <b>{auction.createdAt}</b>
                </div>
              </>
            )}
          </div>

          <div>
            <Steps
              progressDot
              current={auctionState}
              direction="vertical"
              items={auctionSteps}
            />
          </div>
        </div>

        {auction.isFinished ? (
          <></>
        ) : (
          <div className="bet-section">
            <InputNumber
              addonAfter="$"
              value={minPrice}
              min={minPrice}
              step={auction.minStep}
            />
            <Button type="primary" onClick={onClickMakeBet}>
              Make bet
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
