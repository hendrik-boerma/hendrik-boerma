import './App.scss';
import Header from './components/Header';
import Routing from './Routing';
import { DataProvider } from './Dataprovider'

function App() {

  return (
    <DataProvider>
      <Header />
      <main className='bg-backgroundcolor pb-16 px-4 sm:px-8 2xl:px-0 md:pt-8'>
        <Routing />
      </main>
    </DataProvider>
  );
}

export default App;
