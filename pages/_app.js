import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import HeadNav from '../components/Navbar';
import TopPic from '../components/TopPic';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
  <div className='bg-light'>
    <HeadNav/>
    <TopPic/>
    <Component {...pageProps} />
    <Footer/>
  </div>)
}

export default MyApp
