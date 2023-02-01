import './App.scss';
import portret from './Images/portret.png'
import capetown from './Images/work/flyerA4H.png'
import illustrations from './Images/work/Illustrations.png'
import mockup from './Images/work/Mockup.png'
import landscape from './Images/work/Landscape.png'
import voucheraw from './Images/work/VouherAW.png'


function App() {

  function collapsible(num) {
    let paragraf = document.getElementById(num)
    console.log(num)
    if (paragraf.style.display === "none") {
      paragraf.style.display = "block";
      console.log("open")
    } else {
      paragraf.style.display = "none"
    }
  }

  function close() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  }

  function ImageModal(foto){
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById("img");
    modal.style.display = "flex";
    modalImg.src = "landscape";
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#overmij">Over mij</a></li>
            <li><a href="#ervaring">Ervaring</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>
        <div className='homepage'>
          <h1>HENDRIK BOERMA</h1>
          <h2>Testing, UX & FrontEnd Development</h2>
        </div>
      </header>

      <main className='pagecontent'>
        <section className='container1'>
          <div className='text'>
            <h3 id='overmij'>Over mij</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img className='portret' src={portret} alt='Hendrik Boerma' />
        </section>
        <section className='container2'>
          <h3 id='ervaring'>Ervaring</h3>
          <button onClick={() => collapsible("p1")}>Agile Test Engineer - Sogeti</button>
          <p id="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button onClick={() => collapsible("p2")}>E-Commerce medewerker - A4H-TECH</button>
          <p id="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button  onClick={() => collapsible("p3")}>UX Designer - DEAN</button>
          <p id="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button  onClick={() => collapsible("p4")}>Grafisch Vormgever - Adventure Works SA</button>
          <p id="p4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button  onClick={() => collapsible("p5")}>Studie Communication & Multimedia design - Hanze Hogeschool</button>
          <p id="p5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section className='container2'>
          <h3>Skills</h3>
          <p></p>
        </section>
        <section className='container3'>
          <h3 id='portfolio'>Portfolio</h3>
          <div className='gallery'>
            <img src={capetown} alt='cape town' onClick={ImageModal} />
            <img src={illustrations} alt='Hendrik Boerma' />
            <img src={landscape} alt='Hendrik Boerma' />
            <img src={mockup} alt='Hendrik Boerma' />
            <img src={voucheraw} alt='Hendrik Boerma' />
            <img src={voucheraw} alt='Hendrik Boerma' />
            <img src={voucheraw} alt='Hendrik Boerma' />
            <img src={voucheraw} alt='Hendrik Boerma' />
          </div>
        </section>
      </main>
      <div id='modal'>
              <span onClick={close} className="close">X</span>
              <img id='img' alt='Hendrik Boerma'/>
            </div>
      <footer>
        <h3>Contact</h3>
        <i></i>
        <i></i>
        <i></i>
      </footer>
    </>
  );
}

export default App;
