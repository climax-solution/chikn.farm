import Layout from '../components/layout';
import { SSRProvider } from 'react-bootstrap';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SSRProvider>
      {getLayout(
          <Layout>
            <Component {...pageProps} />
          </Layout>
      )}
    </SSRProvider>
  )
}

export default MyApp
