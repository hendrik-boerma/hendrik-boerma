import './App.scss';
import Navigation from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {

  return (
    < >
      <Navigation />
      <header>
        <div className='py-60 bg-offwhite'>
          <div className='fixed w-full flex flex-col justify-center text-center gap-8 px-8'>
          <h1 className='text-darkblue text-4xl font-bold md:text-6xl'>Hendrik Boerma</h1>
          <h2 className='text-darkblue text-2xl md:text-3xl'>Testing, UX & Front-end Development</h2>
          </div>
        </div>
      </header>
      <div className='bg-darkblue sticky'> 
        <About />
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
