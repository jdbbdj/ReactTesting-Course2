import logo from "./logo.svg";
import "./App.css";
import SummaryForm from "./pages/SummaryForm";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <div className="App">
      <SummaryForm />
      <OrderSummary />
    </div>
  );
}

export default App;
