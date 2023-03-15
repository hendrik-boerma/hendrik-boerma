function Navigation (){
    return (
        <nav>
        <ul className="fixed w-full text-lightgrey py-4 flex justify-center md:justify-end md:px-16 md:gap-16 bg-darkblue gap-8 drop-shadow-md z-20 top-0">
          <li className="cursor-pointer"><a className="hover:border-b-2 border-neoblue py-4 decoration-2 underline-offset-8" href="#section1">Over mij</a></li>
          <li className="cursor-pointer"><a className="hover:border-b-2 border-neoblue py-4 decoration-2 underline-offset-8" href="#section2">Ervaring</a></li>
          <li className="cursor-pointer"><a className="hover:border-b-2 border-neoblue py-4 decoration-2 underline-offset-8" href="#section3">Portfolio</a></li>
        </ul>
      </nav>
    );
}

export default Navigation;