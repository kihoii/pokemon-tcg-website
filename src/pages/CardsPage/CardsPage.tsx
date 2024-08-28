import React from 'react';
import './CardsPage.scss';
import { CardList } from '../../components/CardList/CardList.tsx';

export function CardsPage(): React.JSX.Element {
  return (
    <div className="cards-page ">
      <div className="container cards-holder">
        <h2 className="header">All Cards</h2>
        <CardList cardIds={[]} />
      </div>
    </div>
  );
}
