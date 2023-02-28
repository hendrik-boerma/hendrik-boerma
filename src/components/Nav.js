function Navigation (){
    return (
        <nav>
        <ul className="fixed w-full py-4 flex justify-center md:justify-end md:px-16 md:gap-16 bg-offwhite gap-8 drop-shadow-md z-20 top-0">
          <li className="cursor-pointer"><a className="hover:underline decoration-2 underline-offset-8" href="#section1">Over mij</a></li>
          <li className="cursor-pointer"><a className="hover:underline decoration-2 underline-offset-8" href="#section2">Ervaring</a></li>
          <li className="cursor-pointer"><a className="hover:underline decoration-2 underline-offset-8" href="#section3">Portfolio</a></li>
        </ul>
      </nav>
    );
}

export default Navigation;