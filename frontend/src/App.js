import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './Routing';
import { DataProvider } from './Dataprovider'

function App() {

  return (
    <DataProvider>
      <Header />
      <main className='bg-backgroundcolor pb-8 px-4 sm:px-8 2xl:px-0 md:pt-16'>
        <Routing />
      </main>
      <Footer />
    </DataProvider>
  );
}

export default App;
