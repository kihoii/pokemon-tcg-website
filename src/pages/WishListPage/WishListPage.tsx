import './WishListPage.scss';
import { pokemonWishList } from '../../store/localStorageKeys';
import { CardList } from '../../components/CardList/CardList';
import { getItem } from '../../services/localStorageService';

export function WishListPage(): React.JSX.Element {
  const wishList = getItem<string[]>(pokemonWishList, []);

  return <CardList cardIds={wishList} />;
}
