import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from './store.js';
//Import Components
import App from "./components/App.jsx";

// uncomment so that webpack can bundle styles
import styles from "./css/application.css";

// render(<App />, document.getElementById("root"));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") // anchor
);
