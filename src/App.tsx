import './App.scss';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Route, Routes } from 'react-router-dom';
import { UserRatingPage } from './pages/UserRatingPage/UserRatingPage.tsx';
import { CardsPage } from './pages/CardsPage/CardsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { PokemonPage } from './pages/PokemonPage/PokemonPage.tsx';
import { UserAccountPage } from './pages/UserAccountPage/UserAccountPage.tsx';
import { AuctionMarketplacePage } from './pages/AuctionMarketplacePage/AuctionMarketplacePage.tsx';
import { AuctionPage } from './pages/AuctionPage/AuctionPage.tsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="ranking" element={<UserRatingPage />} />
          <Route path="market" element={<CardsPage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="user" element={<UserAccountPage />} />
          <Route path="auction-market" element={<AuctionMarketplacePage />} />
          <Route path="auction/:id" element={<AuctionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
