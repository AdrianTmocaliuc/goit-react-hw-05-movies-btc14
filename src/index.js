import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "components/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/goit-react-hw-05-movies-btc14/">
    <App />
  </BrowserRouter>
);
