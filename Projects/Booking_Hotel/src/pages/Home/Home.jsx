import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Feature from '../../components/Feature/Feature';
import Property from '../../components/Property/Property';
import Destination from '../../components/Destination/Destination';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer/Footer';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home-container'>
        <Feature />
        <Property />
        <Destination />
        <Email />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
