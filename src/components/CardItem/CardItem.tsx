import React from "react";
import "./CardItem.css";
import { Col, Card } from "antd";
import { IPokemon } from "../../interfaces/IPokemon.tsx";

const { Meta } = Card;

export const CardItem: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => (
  <Col span={8}>
    <Card
      hoverable
      title={pokemon.name}
      bordered={false}
      cover={<img alt={pokemon.id} src={pokemon.images.small} />}
    >
      {pokemon.rarity}
      <Meta title={pokemon.artist} description={pokemon.flavorText} />
    </Card>
  </Col>
);
