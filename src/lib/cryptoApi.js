export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}&vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}`;

export const HistoricalChart = (id, currency, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}&vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=${process.env.COIN_GECKO_API_KEY}&vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
