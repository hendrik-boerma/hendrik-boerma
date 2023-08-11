import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';


function App() {

  return (
    < >
         <Header />
      <main className='bg-backgroundcolor'>
        <Portfolio />
        <Experience />
      </main>
        <Footer />
    </>
  );
}

export default App;
