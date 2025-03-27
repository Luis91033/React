/** @format */
import { useMemo } from "react";
import { useCriptoStore } from "../store";
import Spinner from "./Spinner";
const CryptoPriceDisplay = () => {
  const result = useCriptoStore((state) => state.result);
  const loading = useCriptoStore((state) => state.loading);
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotización</h2>
            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Cripto Moneda"
              />
              <div>
                <p>
                  El precio es de: <span>{result.PRICE}</span>
                </p>
                <p>
                  Precio más alto del día: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Precio más bajo del día: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variación últimas 24hrs: <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  última actualización: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
