import React from 'react'
import Link from 'next/link'
import PalpiteForm from '../components/Form'

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
      <PalpiteForm />

    </div>
  )
}

export default Pesquisa