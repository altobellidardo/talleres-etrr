import { useRef, useState } from 'react'

function createWorkshop () {
  const [open, setOpen] = useState(false)
  const [imgUrl, setImgUrl] = useState('')
  const imgInput = useRef(null)

  function handleSubmit (event) {
    event.preventDefault()
  }

  function handleImgUrlChange (event) {
    setImgUrl(event.target.value)
  }

  if (!open) {
    return (
      <button
        className='size-48 rounded text-white bg-blue-500 hover:bg-blue-600 font-bold'
        onClick={() => setOpen(true)}
      >Agregar taller</button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-xl mx-auto mb-12'>
      <button
        type="button"
        className='hover:outline rounded-lg w-fit ml-auto px-1'
        onClick={() => setOpen(false)}
      >⨯</button>
      <label className='flex flex-col gap-1'>
        <p>Nombre <small className='text-red-500 font-bold'>*</small></p>
        <input type="text" name="name" className='px-2 py-1 rounded' required />
      </label>
      <label className='flex flex-col gap-1'>
        <p>Descripcion</p>
        <input type="text" name="description" className='px-2 py-1 rounded' />
      </label>
      <label className='flex flex-col gap-1'>
        <p>Link imagen</p>
        <input type="text" name="image_url" className='px-2 py-1 rounded' ref={imgInput} onChange={handleImgUrlChange} />
        {imgUrl &&
          <>
          <label>
            <small>Previsualización de la imagen</small>
            <img src={imgUrl} alt="preview" className='w-48 mx-auto rounded-lg' />
          </label>
          <button
            className='hover:outline rounded-lg w-fit ml-auto px-1'
            type='button'
            onClick={() => {imgInput.current.value = ''; setImgUrl('')}}
          >Descartar imagen</button>
          </>
        }
      </label>


      <label className='flex flex-col gap-1'>
        <p>Capacidad <small className='text-red-500 font-bold'>*</small></p>
        <input type="number" name="capacity" className='px-2 py-1 rounded' required />
      </label>
      <label className='flex flex-col gap-1'>
      <p>Profesores <small className='text-red-500 font-bold'>*</small></p>
        <input type="text" name="teachers" className='px-2 py-1 rounded' required />
      </label>

      <button
        className='mt-4 rounded text-white bg-blue-500 hover:outline font-bold'
        type="submit"
      >Crear</button>
    </form>
  )
}

export default createWorkshop
