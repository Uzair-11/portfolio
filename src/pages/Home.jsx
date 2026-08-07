import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Bento from '../components/Bento/Bento';
import Projects from '../components/Projects/Projects';
import Certificates from '../components/Certificates/Certificates';
import Footer from '../components/Footer/Footer';
import SketchDivider from '../components/SketchDivider/SketchDivider';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SketchDivider />
        <Bento />
        <SketchDivider />
        <Projects />
        <SketchDivider />
        <Certificates />
      </main>
      <SketchDivider />
      <Footer />
    </>
  );
};

export default Home;


