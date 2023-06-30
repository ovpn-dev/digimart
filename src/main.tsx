import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import Layout from "./components/Layout/Layout";
import { theme } from "./chakra/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
