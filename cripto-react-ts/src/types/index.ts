/** @format */
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  PairSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { z } from "zod";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type PairSchema = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
