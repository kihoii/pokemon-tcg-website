import React, { useState, useEffect } from "react";
import { Row } from "antd";
import "./CardsPage.scss";
import { CardItem } from "../../components/CardItem/CardItem";
import { GetCards } from "../../api/helpers.tsx";
import { PokemonDto } from "../../interfaces/IPokemon.tsx";

export function CardsPage(): React.JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonDto[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      const iPokemons = await GetCards();
      setPokemons(iPokemons);
    };

    loadCards();
  }, []);

  return (
    <div>
      CardsPage
      <div>
        <Row gutter={16}>
          {pokemons.map((item) => (
            <CardItem key={item.id} pokemon={item} />
          ))}
        </Row>
      </div>
    </div>
  );
}
