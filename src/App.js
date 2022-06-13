import { useQuery } from "react-query";
// import "./styles.css";

export default function App() {
  const coin = useQuery(
    "coin",
    () =>
      new Promise((r) =>
        setTimeout(() => r(Math.random() > 0.5 ? "heads" : "tails"), 1000)
      )
  );

  return (
    <div className="App">
      <button
        disabled={coin.isLoading || coin.isRefetching}
        onClick={coin.refetch}
      >
        {coin.data || "loading..."}
      </button>
      <br />
      {coin.isRefetching && "throw a coin..."}
    </div>
  );
}
