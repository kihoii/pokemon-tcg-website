import './PokemonPage.scss';
import { useQuery } from 'react-query';
import { getCardById } from '../../api/helpers.tsx';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

export function PokemonPage(): React.JSX.Element {
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
    <div className="container">
      <div className="cards-page">
        <Card
          className="pokemon-card"
          title={card?.name}
          bordered={false}
          cover={
            <img className="img" alt={card?.id} src={card?.images.large} />
          }
        >
          {card?.rarity}
          <Meta title={card?.artist} description={card?.flavorText} />
        </Card>
      </div>
    </div>
  );
}
