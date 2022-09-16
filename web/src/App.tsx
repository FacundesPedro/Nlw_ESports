import { useState } from 'react';
import logo from './assets/logo.svg'
import './index.css';

function App() {

  return (
    <div className="max-w-[1344px] mx-auto h-screen flex flex-col items-center justify-center ">
      <img src={logo} alt="" />
      
      <div className='mt-10 text-4xl text-white font-black'>
        Seu Duo <strong className='bg-nlw-gradient bg-clip-text text-transparent background-animate border-b-4'>Não</strong> Te Quer Aqui 
      </div>

      <div className='grid grid-cols-6 gap-3'>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_1.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 2 Anúncios </span>
            </div>
          </div>
        </a>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_2.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 1 Anúncios </span>
            </div>
          </div>
        </a>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_3.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 2 Anúncios </span>
            </div>
          </div>
        </a>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_4.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 1 Anúncios </span>
            </div>
          </div>
        </a>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_5.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 6 Anúncios </span>
            </div>
          </div>
        </a>
        <a 
          href=""
          className='relative rounded-lg overflow-hidden' 
        >
          <img  src="/game_6.png" alt="" />
          <div className='w-full pt-3 pb-3 h-1/2 bg-card-gradient absolute bottom-0'>
            <div className='w-full absolute bottom-3 left-3'>
              <strong className='font-bold text-white block'>Game 1</strong>
              <span className='text-zinc-300 text-sm block'> 2 Anúncios </span>
            </div>
          </div>
        </a>
        
      </div>


    
    </div>
  )
}

export default App
