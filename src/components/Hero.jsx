import React from 'react'

const Hero = () => {
  return (
    <header className=' w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3 '>
        <img src='src\assets\logo.svg' alt='logo' className='w-28 object-contain'/>
        <button  type='button'
        onClick={()=>
        window.open ('https://www.instagram.com/tushar__parakh/')} 
        className='black_btn'>
        Instagram
        </button>
        </nav>

        <h1 className='head_text own_gradient'> 
        Summarize Wikipedia Articles With <br className='max-md:hidden'/>
        <span className='orange_gradient'>The OpenAI GPT-4</span>

        </h1>

        <h2 className='pt-10'> Save your time and let AI do the tough task for you.
          Summarize and transform any lengthy article on the Wikipedia with the help of GPT-4.
          
        </h2>
     
      </header>
   
  )
}

export default Hero