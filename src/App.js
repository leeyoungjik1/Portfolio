import { useState, useRef, useEffect } from "react";
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'
import GNB from './components/GNB.js';
import Main from "./pages/Main.js";
import About from './pages/About.js';
import Works from './pages/Works.js';
import Contact from "./pages/Contact.js";
// import { ReactComponent as Logo } from './assets/Youngjik lee.svg'

function App() {
  const [location, setLocation] = useState()
  const main = useRef(null)
  const mainPage = useRef(null)
  const aboutPage = useRef(null)
  const worksPage = useRef(null)
  const contactPage = useRef(null)
  
  const handleScroll = () => {
    // console.log(aboutPage.current.getBoundingClientRect().top )
    // console.log(-aboutPage.current.getBoundingClientRect().height )
    if(mainPage.current.getBoundingClientRect().top <= 0  && mainPage.current.getBoundingClientRect().top > -mainPage.current.getBoundingClientRect().height){
      setLocation('main')
    }else if(aboutPage.current.getBoundingClientRect().top <= 0  && aboutPage.current.getBoundingClientRect().top > -aboutPage.current.getBoundingClientRect().height){
      setLocation('about')
    }else if(worksPage.current.getBoundingClientRect().top <= 0 && worksPage.current.getBoundingClientRect().top > -worksPage.current.getBoundingClientRect().height){
      setLocation('works')
    }else if(contactPage.current.getBoundingClientRect().top <= 0 && contactPage.current.getBoundingClientRect().top > -contactPage.current.getBoundingClientRect().height){
      setLocation('contact')
    }
    // console.log(main.current.scrollTop)
    // console.log(main.current.clientHeight)
    // console.dir(aboutPage.current)
    // console.log(aboutPage.current.scrollTop)
    // console.log(aboutPage.current.offsetTop)
    // console.log(aboutPage.current.clientTop)
    // console.log(aboutPage.current.getBoundingClientRect().top)
    // console.log(aboutPage.current.getBoundingClientRect().top)
  }

  return (
    <div className="App">
      <BrowserView>
        <header className="header">
          <GNB page={{aboutPage, worksPage, contactPage}}/>
        </header>
        <main ref={main} onScroll={handleScroll} onLoad={handleScroll}>
          <section ref={mainPage} className='section'>
            <Main/>            
          </section>
          <section ref={aboutPage} className='section'>
            <About location={location}/>
          </section>
          <section ref={worksPage} className='section'>
            <Works location={location} main={main}/>
          </section>
          <section ref={contactPage} className='section'>
            <Contact location={location}/>
          </section>
        </main>
      </BrowserView>
      <MobileView>
        <h1>mobile</h1>
      </MobileView>
    </div>
  );
}

export default App;
