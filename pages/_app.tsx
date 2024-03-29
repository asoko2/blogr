import { AppProps } from "next/app";
import { Provider } from "next-auth/client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.sessions}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
