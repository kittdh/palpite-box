import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
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
            <a className='bg-blue-500 font bold px-12 py-6 font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none'>
              Dar Opinião ou sugestão
            </a>
          </Link>
        </div>
        {!data && <p>Carregando...</p>}
        {!error && data && data.showCoupon &&
          <p className='font-bold my-12'>
            {data.message}
          </p>
        }
      </div>
    </React.Fragment>
  )
}

export default Index
