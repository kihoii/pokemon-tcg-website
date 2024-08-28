import './PokemonPage.scss';
import { useQuery } from 'react-query';
import { AddCardToUser, getCardById } from '../../api/helpers.tsx';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
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
  const dispatch = useAppDispatch();
  const params = useParams();
  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', params.id], () => getCardById(params.id as string));

  useEffect(() => {
    const wishList = getItem<string[]>(pokemonWishList, []);
    setIsInWishList(wishList.includes(params.id as string));
  }, [params.id]);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  function onClickAddToWishList(cardId: string) {
    dispatch(addToWishList(cardId));
    setIsInWishList(true);
  }

  function onClickRemoveFromWishList(cardId: string) {
    dispatch(removeFromWishList(cardId));
    setIsInWishList(false);
  }

  async function onClickByCard(cardId: string) {
    const success = await AddCardToUser(cardId);
    if (success) {
      setIsCardBought(true);
      dispatch(setHasUserCard());
    }
  }

  const token = getItem<string>(accessApiToken, '');

  return (
    <div className="card-page">
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
