import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
