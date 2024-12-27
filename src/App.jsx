import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>React App</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
