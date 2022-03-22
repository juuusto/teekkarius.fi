import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { CurrentPageProvider } from '../providers/currentPage';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CurrentPageProvider>
        <Component {...pageProps} />
      </CurrentPageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
