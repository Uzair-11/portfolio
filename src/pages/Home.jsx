import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Bento from '../components/Bento/Bento';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bento />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
