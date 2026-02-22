import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router";
import AppModule from "./app/app.module";
import StoreProvider from "./libs/redux/provider";
import Logger from "./libs/logger";

(globalThis as any).Logger = Logger;
createRoot(document.getElementById("root")!).render(
   <StoreProvider>
      <BrowserRouter>
         <AppModule />
      </BrowserRouter>
   </StoreProvider>,
);
