import React from 'react';
import './CardItem.css';
import { Col, Card } from 'antd';
import { PokemonDto } from '../../interfaces/PokemonDto.tsx';
// import { PokemonPage } from '../../pages/PokemonPage/PokemonPage.tsx';

const { Meta } = Card;

function cqqqq() {
  //  <PokemonPage key={id} pokemon={id}/>
}

export const CardItem: React.FC<{ pokemon: PokemonDto }> = ({ pokemon }) => (
  <Col span={6}>
    <Card
      hoverable={true}
      onClick={cqqqq}
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
