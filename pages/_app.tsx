import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });
const theme = createTheme();

const MyApp: NextComponentType<AppProps> = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
