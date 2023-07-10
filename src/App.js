import './App.scss';
import Header from './components/Header';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {

  return (
    < >
      <Header />
      <main className='bg-darkblue sticky'>
        <Experience />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default App;
