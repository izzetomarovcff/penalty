import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { IsLogIn } from '../Redux/actions';

function Login() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }))
        console.log(formData)
      }
      const handleLogIn = async()=>{
        try{
            const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/users.json")
            const data = await response.json()
            if((await data.email === formData.email) && (await data.password === formData.password)){
                dispatch(IsLogIn(true))
            }else{
                dispatch(IsLogIn(false))
            }
        }catch(error){
          console.log(error)
        }
      }
      const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogIn()
      }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className='form form-control py-4 px-3 shadow'>
            <h3 className='mx-auto '>Log In</h3>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>E-Mail</label>
                <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className='form-control shadow-sm' required />
            </div>
            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} className='form-control shadow-sm' required />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input shadow-sm" id="checkbox"/>
                <label className="form-check-label" htmlFor="checkbox">Remember Me</label>
            </div>
            <button className='mt-3 btn btn-primary'>Log In</button>
        </form>
    </div>
  )
}

export default Login