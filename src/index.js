import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import AppAmazone from "./AppAmazone";
import Appforcomplexform from "./Appforcomplexform.js";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./Contexts/Amazone/reducer";
import { StateProvider } from "./Contexts/Amazone/StateProvide";
import Apptwitter from "./Apptwitter";
import Appfullstack from "./Appfullstack";
import Appimessagemern from "./Appimessagemern";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(<Appfullstack />, document.getElementById("root"));
serviceWorker.unregister();

// ReactDOM.render(<AppAmazone />, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <AppAmazone />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// import configureStore from "./app/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider configureStore={configureStore}> */}
//     <App />
//     {/* </Provider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
