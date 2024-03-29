import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Sentry from "@sentry/react";
import "./index.css";

Sentry.init({
  dsn: "https://70e15f9a5f6d48bf9e0e496527745701@o4505214989303808.ingest.sentry.io/4505215006670848",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
