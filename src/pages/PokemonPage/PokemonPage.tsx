import './PokemonPage.scss';
import { useQuery } from 'react-query';
import { AddCardToUser, getCardById } from '../../api/helpers.tsx';
import { useParams } from 'react-router-dom';
import { Button, Card, message } from 'antd';
import {
  addToWishList,
  removeFromWishList,
} from '../../store/wishListSlice.tsx';
import { useAppDispatch } from '../../store/hooks.tsx';
import {
  accessApiToken,
  pokemonWishList,
} from '../../store/localStorageKeys.tsx';
import { useState, useEffect } from 'react';
import { getItem } from '../../services/localStorageService.tsx';
import { setHasUserCard } from '../../store/userCardsSlice.tsx';

const { Meta } = Card;

export function PokemonPage(): React.JSX.Element {
  const [isInWishList, setIsInWishList] = useState(false);
  const [isCardBought, setIsCardBought] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const params = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    data: card,
    error,
    isLoading: isCardLoading,
  } = useQuery(['card', params.id], () => getCardById(params.id as string));

  useEffect(() => {
    const wishList = getItem<string[]>(pokemonWishList, []);
    setIsInWishList(wishList.includes(params.id as string));
  }, [params.id]);

  useEffect(() => {
    if (loadingMessage) {
      messageApi.open({
        key: 'loading',
        type: 'loading',
        content: loadingMessage,
        duration: 0,
      });
    } else {
      messageApi.destroy();
    }
  }, [loadingMessage, messageApi]);

  useEffect(() => {
    if (isCardBought) {
      messageApi.open({
        key: 'success',
        type: 'success',
        content: 'Card purchased successfully!',
        duration: 2,
      });
    }

    if (!isCardBought && error) {
      messageApi.open({
        key: 'error',
        type: 'error',
        content: 'Failed to purchase the card.',
        duration: 2,
      });
    }
  }, [isCardBought, error, messageApi]);

  if (isCardLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  async function onClickByCard(cardId: string) {
    setLoadingMessage('Processing your purchase...');
    const success = await AddCardToUser(cardId);
    if (success) {
      setIsCardBought(true);
      dispatch(setHasUserCard());
    }
    setLoadingMessage(null);
  }

  function onClickAddToWishList(cardId: string) {
    dispatch(addToWishList(cardId));
    setIsInWishList(true);
  }

  function onClickRemoveFromWishList(cardId: string) {
    dispatch(removeFromWishList(cardId));
    setIsInWishList(false);
  }

  const token = getItem<string>(accessApiToken, '');

  return (
    <div className="card-page">
      {contextHolder}
      <div className="card-page-container">
        <Card
          className="pokemon-card"
          title={card?.name}
          bordered={false}
          cover={<img alt={card?.id} src={card?.images.large} />}
        >
          {card?.rarity}
          <Meta title={card?.artist} description={card?.flavorText} />
        </Card>
        {isInWishList ? (
          <Button danger onClick={() => onClickRemoveFromWishList(card?.id!)}>
            Remove from Wishlist
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() => onClickAddToWishList(card?.id!)}
          >
            Add to Wishlist
          </Button>
        )}
        {token && !isCardBought && (
          <Button type="primary" onClick={() => onClickByCard(card?.id!)}>
            Buy Card
          </Button>
        )}
      </div>
    </div>
  );
}
