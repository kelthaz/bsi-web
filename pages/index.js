import Head from 'next/head';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const Home = () => (
  <>
    <Head>
      <title>BanCoppel | Pymes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Footer />
  </>
);
export default Home;
