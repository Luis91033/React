/** @format */
import { useState } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import { PairSchema } from "../types";
import ErrorMessage from "./ErrorMessage";
const CriptoSearch = () => {
  const cryptocurrencies = useCriptoStore((state) => state.cryptocurrencies);
  const fetchData = useCriptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<PairSchema>({
    currency: "",
    criptocurrency: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    fetchData(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map((crypto) => (
            <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="cotizar" />
    </form>
  );
};

export default CriptoSearch;
