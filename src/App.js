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
        <div className='flex flex-col justify-center text-center py-48 px-2 gap-8'>
          <h1 className='text-black text-3xl font-futura'>HENDRIK BOERMA</h1>
          <h2 className='text-black text-2xl'>Testing, UX & FrontEnd Development</h2>
        </div>
      </header>
        <About />
      <div className='bg-darkblue'> 
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
