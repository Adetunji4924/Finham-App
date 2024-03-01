import Features from './Components/Features.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Partners from './Components/Partners.jsx';
import Section from './Components/Section.jsx';
import Faq from './Components/Faq.jsx';
import Footer from './Components/Footer.jsx';
// import ScrollToTop from './ScrollToTop.jsx';

function App() {
 
  return (
    <div> 
      {/* <ScrollToTop /> */}
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
}

export default App
