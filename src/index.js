import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./input.css";
import store from './redux/store'

//const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    
    <App />
  </Provider>
);
