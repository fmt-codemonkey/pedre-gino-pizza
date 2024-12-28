import { createRoot } from "react-dom/client";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="Pepperoni, Cheese and Salami" />
      <Pizza name="Hawaiian" description="Pineapple, Cheese and Veggies" />
      <Pizza name="Americano" description="Half shot coffee and milk" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
