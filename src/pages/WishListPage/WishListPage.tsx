import './WishListPage.scss';
import { pokemonWishList } from '../../store/localStorageKeys';
import { CardList } from '../../components/CardList/CardList';

export function WishListPage(): React.JSX.Element {
  const wishList = JSON.parse(localStorage.getItem(pokemonWishList) || '[]');

  return <CardList cardIds={wishList} />;
}
