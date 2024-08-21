import './App.scss';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Route, Routes } from 'react-router-dom';
import { UserRatingPage } from './pages/UserRatingPage/UserRatingPage.tsx';
import { CardsPage } from './pages/CardsPage/CardsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { PokemonCardPage } from './pages/PokemonCardPage/PokemonCardPage.tsx';
import { UserAccountPage } from './pages/UserAccountPage/UserAccountPage.tsx';
import { AuctionMarketplacePage } from './pages/AuctionMarketplacePage/AuctionMarketplacePage.tsx';
import { BuyPage } from './pages/AuctionPage/BuyPage.tsx';
import { SalePage } from './pages/AuctionPage/SalePage.tsx';
import { UserParticipatedAuctionsPage } from './pages/UserParticipatedAuctionsPage/UserParticipatedAuctionsPage.tsx';
import { UserCreatedAuctionsPage } from './pages/UserCreatedAuctionsPage/UserCreatedAuctionsPage.tsx';

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
          <Route path="auction-sale" element={<SalePage />} />
          <Route path="auction-buy" element={<BuyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
