import React, { useState } from 'react'
import axios from 'axios'
import { MdOutlineCloseFullscreen } from 'react-icons/md'
import './Form.css'

const Form = (update) => {
  const initialState = {
    title: '',
    body: '',
    sulphate: '',
    fertilize: ''
  }


  const [form, setForm] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {  
      const response = await axios.post('http://localhost:4000/api/v1/articles', form)
    } catch (error) {
      throw new Error(error.message)
    }
  }
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  

  return (
    <div className='form-container'>
      <form className='form-add' onSubmit={handleSubmit}>
        <i onClick={() => update.update = false}><MdOutlineCloseFullscreen /></i>
        <div className='input-add'>
          <input name='title' type="text" onChange={handleChange}/>
          <span></span>
        </div>
        <div className='input-add'>
          <input name='body' type="text" onChange={handleChange} />
          <span></span>
        </div>
        <div className='input-add'>
          <input name='suplhate' type="text" onChange={handleChange} />
          <span></span>
        </div>
        <div className='input-add'>
          <input name='fertilize' type="text" onChange={handleChange} />
          <span></span>
        </div>
        
        <div className='button-add'>
          <button type='submit'>Añadir</button>
        </div>
      </form>
    </div>
  )
}

export default Form