import './App.scss';
import Navigation from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import linkedin from './Images/icons/linkedin.png'
import mail from './Images/icons/mail.png'


function App() {

  return (
    < >
      <Navigation />
      <header className='h-screen flex flex-col'>
        <div className='flex flex-col align-center justify-center h-screen bg-offwhite'>
          <div className='fixed w-full flex flex-col text-start gap-6 px-8 pt-20 md:px-16'>
            <h1 className='text-darkblue text-4xl font-bold md:text-6xl'>Hendrik Boerma</h1>
            <h2 className='text-darkblue text-2xl md:text-3xl'>Testing, UX & Front-end Development</h2>
            <div className='flex gap-4'>
            <i className="w-16 cursor-pointer"><a href='https://www.linkedin.com/in/hendrik-boerma' ><img src={linkedin} alt='linkedinicon'/></a></i>
            <i className="w-16 cursor-pointer"><a href='mailto:hendrikboerma@gmail.com' ><img src={mail} alt='mailicon'/></a></i>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center p-8 md:px-16 text-center z-10'>
            <a className='text-4xl cursor-pointer bg-darkblue text-offwhite w-12 h-12 rounded-full hover:animate-bounce' href="#section1">↓</a>
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
