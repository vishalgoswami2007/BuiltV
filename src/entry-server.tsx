import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import "./i18n/i18n";
import App from "./App";

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <App RouterComponent={StaticRouter} routerProps={{ location: url }} />
    </StrictMode>,
  );
}