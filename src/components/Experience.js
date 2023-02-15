import images from '../images'

function Experience () {
    
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

    return (
        <section className='container2'>
          <div className='ervaring'>
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
          </div>
          <div className='skills'>
            <h3>Skills</h3>
            <div className='skillsicons'>
              <img src={images.htmlicon} alt='Hendrik Boerma' />
              <img src={images.cssicon} alt='Hendrik Boerma' />
              <img src={images.jsicon} alt='Hendrik Boerma' />
              <img src={images.figmaicon} alt='Hendrik Boerma' />
              <img src={images.adobeicon} alt='Hendrik Boerma' />
              <img src={images.tmapicon} alt='Hendrik Boerma' />
            </div>
          </div>
        </section>
    );
}

export default Experience;