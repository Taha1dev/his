import '@/styles/globals.css';
import '@/styles/app.css'
import styles from '../styles/NavBar.module.css'

// import  BreadcrumbsProvider  from 'next-breadcrumbs';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
