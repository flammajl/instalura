import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme/theme';
import GlobalStyle from '../style/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
