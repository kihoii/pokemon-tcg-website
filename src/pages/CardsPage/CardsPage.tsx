import React from 'react';
import './CardsPage.scss';
import { CardList } from '../../components/CardList/CardList.tsx';

export function CardsPage(): React.JSX.Element {
  return <CardList cardIds={[]} />;
}
