/** @format */

import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { PairSchema } from "../types";

export async function getCriptos() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(pair: PairSchema) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );
  if (result.success) {
    return result.data;
  }
}
