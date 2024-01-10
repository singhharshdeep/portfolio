import React from 'react'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: '/budgetbud.png',
      href: 'https://github.com/singhharshdeep/budgetbud',
      description: "A side project created in React Native to manage personal finances(WIP)"
    },
    {
      id: 2,
      src: '/rn-switcher.png',
      href: 'https://github.com/singhharshdeep/rn-switcher',
      description: "A react native switcher component implementation listed in npm repository"
    },
    {
      id: 3,
      src: '/veerscript.png',
      href: 'https://github.com/singhharshdeep/veerscript',
      description: "A personal toy project to create a TypeScript based programming language with syntax based off of my native language(Punjabi)"
    }
  ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Portfolio</p>
          <p className='py-6'>Check out some of my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, description, src, href }) => (
            <div key={id} className='flex flex-col shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
              <a href={href} target='_blank'>
                <img src={src} alt="" className='rounded-md' />
                <div className='flex items-center justify-center gap-2 mt-2 p-4'>
                  <h2>{description}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio