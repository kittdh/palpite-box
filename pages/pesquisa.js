import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  return (
    <div className='items-center'>
      <div className='text-center'>
        <h1 className='font-bold mb-10 text-3xl'> Críticas e Soluções </h1>
        <p className='font-bold mb-10'>
          O restaurante x sempre por atender melhor seus clientes. <br />
          Por isso, estamos sempre abertos a ouvir a sua opinião
        </p>
      </div>
      <div className='w-400px justify-center mx-auto my-8'>

        <label className='font-semibold'>Seu nome:</label>
        <input className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
        focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

        <label className='font-semibold'>E-mail:</label>
        <input className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
        focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

        <label className='font-semibold'>Whatsapp:</label>
        <input className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
        focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

        <label className='font-semibold'>Sua critica e/ou sugestão:</label>
        <textarea rows='4' className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
        focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='textarea'></textarea>
      </div>

    </div>
  )
}

export default Pesquisa