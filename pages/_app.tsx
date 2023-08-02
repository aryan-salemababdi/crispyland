import { NextPage } from "next";
import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../stores/store";

const cache = createCache({ key: "css", prepend: true });
const theme = createTheme();

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
