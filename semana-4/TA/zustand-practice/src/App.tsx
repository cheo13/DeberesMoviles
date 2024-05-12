import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProduceButton from "./components/ProductionComponent";
import DistributeButton from "./components/DistributionComponent";
import StockDisplay from "./components/StockComponent";
import Product from "./components/ProductsComponent";

function App() {
  return (
    <div>
      <h1>Factory Management</h1>
      <div>
        <h2>Product 1</h2>
        <ProduceButton />
        <DistributeButton />
        <StockDisplay />

        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
export default App;
