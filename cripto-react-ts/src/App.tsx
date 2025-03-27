/** @format */

import { useEffect } from "react";
import CriptoSearch from "./components/CriptoSearch";
import { useCriptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  const fetchCriptos = useCriptoStore((state) => state.fetchCryptos);
  useEffect(() => {
    fetchCriptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearch />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
