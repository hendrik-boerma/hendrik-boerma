import './App.scss';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';


function App() {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    < >
         <Header tabIndex={tabIndex}/>
      <main className='bg-backgroundcolor'>
        <Portfolio tabIndex={tabIndex} setTabIndex={setTabIndex}/>
        <Experience tabIndex={tabIndex}/>
      </main>
        <Footer />
    </>
  );
}

export default App;
