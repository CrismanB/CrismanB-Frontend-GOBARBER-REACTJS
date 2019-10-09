import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import history from "./services/history";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
