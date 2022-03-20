import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
