import React, {useState} from 'react'
import ButtonComponent from '../components/ButtonComponent'

const Login = () => {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleClick = () =>{
    if (data.email.includes('@')) setHide(!hide)
    else alert('Tolong isi sesuai email')
    }
    
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  console.log(data)
  
  return (
    <div>
      <h1>{hide? "Register": "Login"} Page</h1>
      <input name="email" placeholder="email" onChange={handleChange}/>
      <input name="password" placeholder="password" onChange={handleChange}/>
      <ButtonComponent handleClick={handleClick} title="Login" />
    </div>
  )
}

export default Login