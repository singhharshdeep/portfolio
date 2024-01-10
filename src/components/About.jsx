import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>About</p>
        </div>
        <p className='text-xl mt-20'>I am a seasoned Software Engineer with over four years of hands-on experience in designing and implementing robust, scalable, and efficient software solutions. My journey in the tech industry has been driven by a passion for solving complex problems and creating impactful applications. I specialize in Frontend Web and Mobile Technologies, and I am dedicated to staying at the forefront of technological advancements.</p>
        <br />
        <p className='text-xl'>I thrive in dynamic and collaborative environments, where my ability to adapt quickly and learn continuously has been key to my success. I am always eager to take on new challenges, explore emerging technologies, and contribute my skills to projects that push the boundaries of what technology can achieve.</p>
      </div>
    </div>
  )
}

export default About