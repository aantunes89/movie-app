export interface CryptoPairResponseInterface {
  result: {
    instrument_name: string;
    data: CryptoPairDetails;
  };
}

interface CryptoPairDetails {
  info: string; // i
  lastValue: number; // b;
}
