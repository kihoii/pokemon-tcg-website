import { useQuery } from 'react-query';
import { getCardsByIds } from '../../api/helpers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './WishListPage.scss';
import { pokemonWishList } from '../../store/localStorageKeys';
import { Pagination, PaginationProps, Row } from 'antd';
import { CardItem } from '../../components/CardItem/CardItem';
import { changePage, changePageSize } from '../../store/cardsPageSlice';

export function WishListPage(): React.JSX.Element {
  const page = useAppSelector((state) => state.cardsPage.page);
  const pageSize = useAppSelector((state) => state.cardsPage.pageSize);
  const wishList = JSON.parse(localStorage.getItem(pokemonWishList) || '[]');
  const dispatch = useAppDispatch();

  const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    dispatch(changePage(pageNumber));
    dispatch(changePageSize(pageSize));
  };

  const {
    data: cards,
    error,
    isLoading,
  } = useQuery(['cards', wishList], () => getCardsByIds(wishList));

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
        total={250}
        onChange={onChange}
      />
    </div>
  );
}
