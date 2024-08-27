import { UserParticipatedAuctionsPage } from './pages/UserParticipatedAuctionsPage/UserParticipatedAuctionsPage.tsx';
import { UserCreatedAuctionsPage } from './pages/UserCreatedAuctionsPage/UserCreatedAuctionsPage.tsx';
import { AuctionMarketplacePage } from './pages/AuctionMarketplacePage/AuctionMarketplacePage.tsx';
import { PokemonCardPage } from './pages/PokemonCardPage/PokemonCardPage.tsx';
import { UserAccountPage } from './pages/UserAccountPage/UserAccountPage.tsx';
import { UserRatingPage } from './pages/UserRatingPage/UserRatingPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { AuctionPage } from './pages/AuctionPage/AuctionPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';
import { CardsPage } from './pages/CardsPage/CardsPage.tsx';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { WishListPage } from './pages/WishListPage/WishListPage.tsx';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { CreateAuctionPage } from './pages/CreateAuctionPage/CreateAuctionPage.tsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="ranking" element={<UserRatingPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="card/:id" element={<PokemonCardPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="user" element={<UserAccountPage />} />
          <Route path="auctions" element={<AuctionMarketplacePage />} />
          <Route
            path="/auctions/participated"
            element={<UserParticipatedAuctionsPage />}
          />
          <Route
            path="/auctions/created"
            element={<UserCreatedAuctionsPage />}
          />
          <Route path="create-auction" element={<CreateAuctionPage />} />
          <Route path="auction/:id" element={<AuctionPage />} />
          <Route path="wish-list" element={<WishListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
