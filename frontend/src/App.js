import './App.scss';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import About from './components/About';


function App() {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    < >
      <Header tabIndex={tabIndex} />
      <main className='bg-backgroundcolor py-8 px-4 sm:px-8 2xl:px-0'>
        <About tabIndex={tabIndex} />
        <Portfolio tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <Experience tabIndex={tabIndex} />
      </main>
      <Footer />
    </>
  );
}

export default App;
