import './CardList.scss';
import React from 'react';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Pagination, PaginationProps, Row } from 'antd';
import { CardItem } from '../../components/CardItem/CardItem';
import { changePage, changePageSize } from '../../store/cardsPageSlice';
import { getCards, getCardsByIds } from '../../api/helpers';

interface CardIds {
  cardIds: string[];
}

export function CardList({ cardIds: cardIds }: CardIds): React.JSX.Element {
  const page = useAppSelector((state) => state.cardsPage.page);
  const pageSize = useAppSelector((state) => state.cardsPage.pageSize);
  const dispatch = useAppDispatch();

  const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    dispatch(changePage(pageNumber));
    dispatch(changePageSize(pageSize));
  };

  const {
    data: cards,
    error,
    isLoading,
  } = cardIds.length > 0
    ? useQuery(['cards', cardIds], () => getCardsByIds(cardIds), {
        enabled: cardIds.length > 0,
      })
    : useQuery(['cards', page, pageSize], () => getCards(page, pageSize));

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>Error loading cards</div>;
  }

  return (
    <div className="cards-page">
      <Row gutter={16}>
        {cards?.map((item) => <CardItem key={item.id} pokemon={item} />)}
      </Row>
      <Pagination
        showQuickJumper
        defaultCurrent={page}
        pageSize={pageSize}
        pageSizeOptions={[8, 16, 20]}
        total={(cardIds?.length as number) > 0 ? cardIds?.length : 250}
        onChange={onChange}
      />
    </div>
  );
}
