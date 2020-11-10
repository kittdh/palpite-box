import React from 'react'

const PalpiteForm = () => {
  const save = async () => {
    const form = {
      Nome: 'aaa',
      Email: 'bbb',
      Whatsapp: 'ccc'
    }
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = response.json()
      console.log(data)
    } catch (err) { }
  }

  return (

    <React.Fragment>
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

        <button onClick={save} className='bg-blue-500 font bold px-12 py-4 font-bold rounded-lg 
        shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none'>
          Salvar
        </button>
      </div>
    </React.Fragment>

  )
}

export default PalpiteForm