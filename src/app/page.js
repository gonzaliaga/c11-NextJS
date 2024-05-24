import React from 'react'
import ClientButton from '@/components/boton'
import DateDisplay from '@/components/date'

const page = () => {
  return (
    <div className='text-center mx-auto m-6'>
      <div>Pagina de Inicio</div>
      <DateDisplay />
      <ClientButton text="Aca va el boton"/>
    </div>
  )
}

export default page