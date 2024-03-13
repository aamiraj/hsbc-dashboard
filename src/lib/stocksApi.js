export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}&vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}`;

export const HistoricalChart = (symbol, interval='1d') =>
  `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=${symbol}&interval=${interval}&diffandsplits=false`;

export const TrendingStocks = () =>
  `https://yahoo-finance15.p.rapidapi.com/api/v2/markets/tickers?type=STOCKS&page=1`;
