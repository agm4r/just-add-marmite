import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
