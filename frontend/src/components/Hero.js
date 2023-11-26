import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white font-tanker tracking-widest'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#f0f0f0] font-bold p-2'>Established 2023</p>
            <div>
                <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Perch on the peak of</p>
                <Typed 
                className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'
                strings={['Flavor.', 'Quality.', 'Novelty.']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
            </div>
        </div>
    </div>
  )
}

export default Hero