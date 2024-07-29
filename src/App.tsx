import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
