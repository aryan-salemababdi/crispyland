import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;