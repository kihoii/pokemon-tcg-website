import React, { useState, useEffect } from 'react';
import './CardItem.css';
import { Col, Card } from 'antd';
import { PokemonDto } from '../../interfaces/PokemonDto.tsx';

const { Meta } = Card;

export const CardItem: React.FC<{ pokemon: PokemonDto }> = ({ pokemon }) => {
  const [columnSpan, setColumnSpan] = useState(getColumnSpan());

  useEffect(() => {
    const handleResize = () => {
      setColumnSpan(getColumnSpan());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getColumnSpan() {
    const width = document.documentElement.clientWidth;
    if (width < 1440) {
      return 6;
    } else if (1440 <= width) {
      return 3;
    }
  }

  return (
    <Col span={columnSpan}>
      <Card
        hoverable={true}
        onClick={() => window.location.assign('/pokemon/' + pokemon.id)}
        className="pokemon-card"
        title={pokemon.name}
        bordered={false}
        cover={
          <img className="img" alt={pokemon.id} src={pokemon.images.small} />
        }
      >
        {pokemon.rarity}
        <Meta title={pokemon.artist} description={pokemon.flavorText} />
      </Card>
    </Col>
  );
};
