import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputAmount, setInputAmount] = useState(0);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
  const [exchangedCoinsCount, setExchangedCoinsCount] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        setCoins(json);
      });
  }, []);

  const selectCoinChange = (e) => {
    console.log(e.target.value);
    const selectedCoinId = e.target.value;
    const selectedCoin = coins.find((coin) => coin.id === selectedCoinId);
    setSelectedCoinPrice(selectedCoin.quotes.USD.price);
  };

  const inputAmountChange = (e) => {
    setInputAmount(e.target.value);
    setExchangedCoinsCount(0);
  };

  const calculateExchange = (e) => {
    e.preventDefault();
    setExchangedCoinsCount(inputAmount / selectedCoinPrice);
  };
  return (
    <div>
      <h1> The Coins!({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : ""}
      <form type="submit">
        <input
          style={{ marginBottom: "5px", display: "block" }}
          type="number"
          value={inputAmount}
          onChange={inputAmountChange}
          placeholder="환전하고 싶은 금액이 얼마에요?"
        />

        <select
          style={{ marginBottom: "5px", display: "block" }}
          onChange={selectCoinChange}
        >
          <option value="">Selected a Coin</option>

          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}({coin.symbol}):{coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <button onClick={calculateExchange}>Submit</button>
      </form>
      <h3>
        {" "}
        exchanged Coin : {exchangedCoinsCount}{" "}
        {exchangedCoinsCount > 0 ? "coins" : "coin"}{" "}
      </h3>
    </div>
  );
}

export default App;
