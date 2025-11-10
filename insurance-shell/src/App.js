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
