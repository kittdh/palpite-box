import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <React.Fragment>
      <div className='text-center'>
        <div>
          <p className='font-bold'>
            O restaurante x sempre por atender melhor seus clientes. <br />
            Por isso, estamos sempre abertos a ouvir a sua opinião
          </p>
        </div >
        <div className='my-12'>
          <Link href='/pesquisa'>
            <a className='bg-blue-500 font bold px-12 py-6 font-bold rounded-lg shadow-lg hover:shadow'>
              Dar Opinião ou sugestão
            </a>
          </Link>
        </div>
        <p className='font-bold my-12'>
          Mensagem do desconto
        </p>
      </div>
    </React.Fragment>
  )
}

export default Index
