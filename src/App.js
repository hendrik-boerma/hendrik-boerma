import './App.scss';
import Navigation from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Navigation />
      <header>
        <div className='homepage'>
          <h1>HENDRIK BOERMA</h1>
          <h2>Testing, UX & FrontEnd Development</h2>
        </div>
      </header>
      <main className='pagecontent'>
        <About />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
