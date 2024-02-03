import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useCallback, useState } from 'react'

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }, [setMenuOpen]);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="Logo" 
            width={130}
            height={29}
          />
        </a>
{/*         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'> */}
          <ul
            className={`
              flex-1 flex justify-center items-center gap-16 text-sm absolute w-full
              left-0 py-4 pl-7
              md:gap-10
              lg:gap-8
              max-lg:flex-col max-lg:gap-12 max-lg:absolute max-lg:top-20 max-lg:bg-coral-red ${
                menuOpen ? 'max-lg:flex opacity-100 top-0' :'max-lg:flex max-lg:opacity-0 max-lg:top-[-400px]'
              } transition-all ease-in duration-500
            `}
          >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className={`
                p-1 font-montserrat leading-normal text-lg lg:text-sm text-coral-red font-normal transition ease-in-out delay-80 hover:text-orange-300 hover:border-b hover:border-orange-300 ${
                  menuOpen ? 'max-lg:text-yellow-50':'max-lg:text-yellow-50'}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button 
            className="hidden max-lg:block"
            onClick={toggleMenu}
        >
          <img
            src={hamburger}
            alt='Menu mobile'
            width={25}
            height={25}
          />
        </button>
      </nav>
    </header>
  )
}

export default Nav