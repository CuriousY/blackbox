import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.jsx";
import store from "./store";

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    window.document.getElementById('app'));