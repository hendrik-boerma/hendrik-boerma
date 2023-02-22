function Navigation (){
    return (
        <nav>
        <ul className="fixed w-full py-4 flex justify-center bg-offwhite gap-8 drop-shadow-md">
          <li className="cursor-pointer"><a className="hover:opacity-50" href="#section1">Over mij</a></li>
          <li className="cursor-pointer"><a className="hover:opacity-50" href="#section2">Ervaring</a></li>
          <li className="cursor-pointer"><a className="hover:opacity-50" href="#section3">Portfolio</a></li>
        </ul>
      </nav>
    );
}

export default Navigation;