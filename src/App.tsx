import './App.scss';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Route, Routes } from 'react-router-dom';
import { UserRatingPage } from './pages/UserRatingPage/UserRatingPage.tsx';
import { CardsPage } from './pages/CardsPage/CardsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />

        <main>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="ranking" element={<UserRatingPage />} />
            <Route path="market" element={<CardsPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
