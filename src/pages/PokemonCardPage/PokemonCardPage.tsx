import './PokemonCardPage.scss';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers.tsx';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'antd';

const { Meta } = Card;

export function PokemonCardPage(): React.JSX.Element {
  const params = useParams();
  const {
    data: card,
    error,
    isLoading,
  } = useQuery(['card', params.id], () => getCardById(params.id as string));

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

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
        <Button type="primary">Add to Wishlist</Button>
        <Button type="primary">Buy Card</Button>
      </div>
    </div>
  );
}
