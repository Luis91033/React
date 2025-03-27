/** @format */

import { create } from "zustand";
import { fetchCurrentCryptoPrice, getCriptos } from "./services/CryptoService";
import { CryptoCurrency, CryptoPrice, PairSchema } from "./types";

type CryptoStore = {
  result: CryptoPrice;
  cryptocurrencies: CryptoCurrency[];
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: PairSchema) => Promise<void>;
};

export const useCriptoStore = create<CryptoStore>((set) => ({
  cryptocurrencies: [],
  loading: false,
  result: {} as CryptoPrice,
  fetchCryptos: async () => {
    const cryptocurrencies = await getCriptos();

    set(() => ({
      cryptocurrencies,
    }));
  },

  fetchData: async (pair) => {
    set(() => ({
      loading: true,
    }));
    const result = await fetchCurrentCryptoPrice(pair);
    set(() => ({
      result,
      loading: false,
    }));
  },
}));
