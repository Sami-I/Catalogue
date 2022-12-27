import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "../components";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
