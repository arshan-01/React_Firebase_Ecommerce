import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import store from "./Store";
import {Provider} from 'react-redux'

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>


, document.getElementById("root"));


