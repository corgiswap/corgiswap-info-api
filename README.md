# Documentation

All Corgiswap pairs consist of two different tokens. BNB is not a native currency in Corgiswap, and is represented only by WBNB in the pairs.

The canonical WBNB address used by the Corgiswap interface is `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.corgiswap.org/api/summary)

Returns data for the top Corgiswap pairs, sorted by reserves.

### Request

`GET https://api.corgiswap.org/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```

## [`/tokens`](https://api.corgiswap.org/api/tokens)

Returns the tokens in the top pairs on Corgiswap, sorted by reserves.

### Request

`GET https://api.corgiswap.org/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_BNB": "...",             // price denominated in BNB
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api.corgiswap.org/api/tokens/0x802C68730212295149f2bEa78C25e2Cf5A05B8A0)

Returns the token information, based on address.

### Request

`GET https://api.corgiswap.org/api/tokens/0x802C68730212295149f2bEa78C25e2Cf5A05B8A0`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_BNB": "...",               // price denominated in BNB
  }
}
```

## [`/pairs`](https://api.corgiswap.org/api/pairs)

Returns data for the top Corgiswap pairs, sorted by reserves.

### Request

`GET https://api.corgiswap.org/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of BNB and BEP20 tokens, joined by an underscore
      "id": "0x...",                  // pair id
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```

## [`/pairs/0x...`](https://api.corgiswap.org/api/pairs/0x1E84AD2E560BB849c2801b8dcB620f6aB44d6280)

Returns the pair information, based on address.

### Request

`GET https://api.corgiswap.org/api/pairs/0x1E84AD2E560BB849c2801b8dcB620f6aB44d6280`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
      "id": "0x...",                  // pair id
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
  }
}
```