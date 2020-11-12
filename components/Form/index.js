import React, { useState } from 'react'

const PalpiteForm = () => {
  const [form, setForm] = useState({ //hook para atualizar o valor sempre que atualizar o dom
    Nome: '',
    Email: '',
    Whatsapp: ''
  })
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value // é um evento sintético e preciso cashear para depois atualizar o valor
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (

    <React.Fragment>
      {!success &&
        <div className='w-400px justify-center mx-auto my-8'>
          <label className='font-semibold'>Seu nome:</label>
          <input placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
              focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

          <label className='font-semibold'>E-mail:</label>
          <input placeholder='E-mail' name='Email' onChange={onChange} value={form.Email} className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
              focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

          <label className='font-semibold'>Whatsapp:</label>
          <input placeholder='Whatsapp' name='Whatsapp' onChange={onChange} value={form.Whatsapp} className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
              focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='text' />

          <label className='font-semibold'>Sua critica e/ou sugestão:</label>
          <textarea placeholder='Critica e/ou sugestão' rows='4' className='mb-6 mt-2 w-100pc p-4 py-4 bg-gray-300 rounded-lg shadow-lg 
              focus:outline-none hover:bg-gray-400 focus:bg-gray-400' type='textarea'></textarea>

          <button onClick={save} className='bg-blue-500 font bold px-12 py-4 font-bold rounded-lg 
          shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none'>
            Salvar
          </button>
        </div>
      }
      { success &&
        <div>
          cupon : {JSON.stringify(retorno)}
        </div>
      }
    </React.Fragment>

  )
}

export default PalpiteForm