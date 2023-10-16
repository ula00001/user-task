import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {globalStyles} from "./styles/globalStyles";
import {StoreServiceProvider} from "./components/service-context";
import StoreService from "./services/store-service";
import store from "./store";

const storeService = new StoreService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {globalStyles}
    <Provider store={store}>
      <StoreServiceProvider value={storeService}>
        <App/>
      </StoreServiceProvider>
    </Provider>
  </>
);

