import React, { useState } from 'react'
import platanera from '../../assets/Platanera.png'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {

    const navigate = useNavigate()

    const initialState = {
        password: '',
    }

    const [form, setForm] = useState(false)
    const [formContent, setFormContent] = useState(initialState) 
    const [error, setError] = useState(false) 

    function handleLogoClick() {
        setForm(!form)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formContent.password === '4484') {
            return navigate('/home') 
        }
        else {
            setError(true)
        }
    } 

    function handleChange(e) {
        setFormContent({ ...formContent, [e.target.name]: e.target.value})
    }

    return (
        <div className='welcome-container'>
            <div className='text-container'>
                <h1 className='text-welcome'>Welcome</h1>
                <span></span>
            </div>

            <img onClick={handleLogoClick} className='platanera' src={platanera} />
            {form && 
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <input name='password' onChange={handleChange} type="password" required />
                        <button type='submit'>Entrar</button>
                    </form>
                    {error && 
                        <div className='error-container'>
                            <p className='error-text'>¡Error! Contraseña incorrecta.</p>
                        </div>
                    }
                </div>
            }        
        </div>
    )
}

export default Welcome