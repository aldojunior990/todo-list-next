import { ContextProvider } from '../hooks/context';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ContextProvider>
  );
}

export default MyApp;
