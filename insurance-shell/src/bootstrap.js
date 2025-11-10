// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

const RemoteApp = React.lazy(() => import("remoteApp/RemoteApp"));

const App = () => (
  <div>
    <h1>Shell App</h1>
    <Suspense fallback={<div>Loading Remote App...</div>}>
      <RemoteApp />
    </Suspense>
  </div>
);

const el = document.getElementById("root");
createRoot(el).render(<App />);
