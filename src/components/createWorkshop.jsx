import { useState } from 'react'
import './createWorkshop.css'

function createWorkshop () {
  const [open, setOpen] = useState(false)

  function handleSubmit (event) {
    event.preventDefault()
  }

  if (!open) {
    return (
      <button className='size-48 rounded text-white bg-blue-500 hover:bg-blue-600 font-bold' onClick={() => setOpen(true)}>
        Agregar taller
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" id='close' onClick={() => setOpen(false)}>⨯</button>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Description
        <input type="text" name="description" />
      </label>
      <label>
        Image URL
        <input type="text" name="image_url" />
      </label>
      <label>
        Capacity
        <input type="number" name="capacity" />
      </label>
      <label>
        Teachers
        <input type="text" name="teachers" />
      </label>

      <button id="crear" type="submit">Crear</button>
    </form>
  )
}

export default createWorkshop
