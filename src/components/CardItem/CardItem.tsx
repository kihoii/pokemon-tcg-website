import React from 'react';
import './CardItem.css';
import { Col, Card } from 'antd';
import { PokemonDto } from '../../interfaces/PokemonDto.tsx';

const { Meta } = Card;

export const CardItem: React.FC<{ pokemon: PokemonDto }> = ({ pokemon }) => (
  <Col span={6}>
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
