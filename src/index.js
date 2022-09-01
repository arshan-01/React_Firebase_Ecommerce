import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Context from "./Context/Context";

ReactDOM.render(
<Context>
<App />
</Context>

, document.getElementById("root"));


