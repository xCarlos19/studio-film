import { useState } from 'react';

const Navbar = ({page=""}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font">
  <div
    className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <div
      className="flex gap-6 title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/logo-icono-final.PNG" />
      <span className="text-xl">STUDIO FILMS 23</span>

      <button
      className="inline-flex items-center text-gray-900 md:hidden focus:outline-none"
      id="menu-toggle"
      onClick={toggleMenu} 
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    </div>

   
    
    <nav
      id="nav-menu"
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } sm:flex sm:flex-row flex-col md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center sm:gap-10 gap-2`}
    >
      <a
        className="inline-flex items-center cursor-pointer border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        href="/"
        >INICIO</a
      >
      <a
        className={`${ page === 'galeria' ? 'text-gray-900 bg-gray-200' : ""   } inline-flex items-center cursor-pointer border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0`}
        href="/galeria">
        GALERÍA
      </a>
      <a
        className={`${ page === 'servicios' ? 'text-gray-900 bg-gray-200' : ""   } inline-flex items-center cursor-pointer border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0`}
        href="/servicios/book">SERVICIOS</a>
      <a
        className={`${ page === 'contacto' ? 'text-gray-900 bg-gray-200' : ""   } inline-flex items-center cursor-pointer border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0`}
        href="/contacto">CONTACTO</a
      >
    </nav>
  </div>
</header>
  );
};

export default Navbar;