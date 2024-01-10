import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const socialLinks = [
    {
      id: 1,
      child: <FaLinkedin size={40} />,
      href: 'https://www.linkedin.com/in/harsh-deepsingh',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: <FaGithub size={40} />,
      href: 'https://github.com/singhharshdeep'
    },
    {
      id: 3,
      child: <HiOutlineMail size={40} />,
      href: 'mailto:singh.harshdeep@hotmail.com'
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={40} />,
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true
    }
  ];

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 2,
      link: 'contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Harsh</h1>
      </div>
      <ul className='hidden md:flex'>
        {
          links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))
        }
      </ul>

      <div onClick={() => setNavOpen(!navOpen)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
        {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navOpen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {
            links.map(({ id, link }) => (
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
            ))
          }
          <div className='flex flex-row mt-4'>
            {socialLinks.map(({ id, child, href, style, download }) => (
              <li key={id} className='mx-4'>
                <a href={href} target="_blank" download={download} className='flex justify-between items-center w-full text-white'>
                  {child}
                </a>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  )
}

export default Navbar