import './WishListPage.scss';
import { pokemonWishList } from '../../store/localStorageKeys';
import { CardList } from '../../components/CardList/CardList';
import { LocalStorageService } from '../../services/localStorageService';

export function WishListPage(): React.JSX.Element {
  const wishList = LocalStorageService.getItem(pokemonWishList) || [];

  return <CardList cardIds={wishList} />;
}
