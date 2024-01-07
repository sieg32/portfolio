import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";
import Hero from "./component/UI/hero";
import Services from "./component/UI/Services";
import Portfolio from "./component/UI/Portfolio";
import Contact from "./component/UI/Contact";
import Scroll from './component/scroll/Scroll';
import Qualification from "./component/UI/Qualification";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Scroll />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Qualification />
        <Contact />

      </main>
      <Footer />
    </>
  );
}

export default App;
