import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Navbar({UserButton}) {
  
  return (
    <header>
      <nav className='navbar'>

        <Link href="/">
          <img src="/UofM.jpeg" alt="MyPic" className='navbar__logo' />
        </Link>

        <ul className='navbar__menu'>
          <li>
            <Link href="/"> Home</Link>
          </li>

          <li>
            <Link href="/AddAll"> Add/All</Link>
          </li>

          <li>
            <Link href="/Active"> Active</Link>
          </li>

          <li>
            <Link href="/Completed"> Completed</Link>
          </li>
        </ul>
        
        <ul className='navbar__icons'>
          <li>
            <a href="https://github.com/csci5117s23/homework-2-hoin0784"><BsGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hoin-jang-896036215"><BsLinkedin /></a>
          </li>
          <li className='profile'>
            {UserButton}
          </li>
        </ul>
      </nav>
    </header>
  )
}

