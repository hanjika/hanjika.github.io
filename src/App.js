import './App.scss';
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import IntroEffect from './components/IntroEffect';
// import ColouredParticles from './components/ColouredParticles';
import Skills from './components/Skills';
import Cursor from './components/Cursor';

const App = () => {
  // const [loading, setLoading] = useState(true);
  // const [offsetY, setOffsetY] = useState(0);

  // const handleScroll = () => {
  //   setOffsetY(window.pageYOffset);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [])
  
  // if (loading) {
  //   return <IntroEffect />;
  // } else {
    return (
      <div className='App'>
        <Cursor />
        {/* <ColouredParticles /> */}
        <Header />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  // }
};

export default App;
