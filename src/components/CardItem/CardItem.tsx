import React from "react";
import "./CardItem.css";
import { Col, Card } from "antd";
import { PokemonDto } from "../../interfaces/IPokemon.tsx";

const { Meta } = Card;

export const CardItem: React.FC<{ pokemon: PokemonDto }> = ({ pokemon }) => (
  <Col span={8}>
    <Card
      title={pokemon.name}
      bordered={false}
      cover={<img alt={pokemon.id} src={pokemon.images.small} />}
    >
      {pokemon.rarity}
      <Meta title={pokemon.artist} description={pokemon.flavorText} />
    </Card>
  </Col>
);
