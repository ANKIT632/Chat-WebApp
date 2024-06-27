import { useState } from 'react';
import { style } from '../css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""

  })

  const navigate=useNavigate();

  const loginHandler = async () => {
    setLoading(true);

    const userData = {
      name: formData.name, password: formData.password
    }

    try {
      const res = await axios.post('http://localhost:5000/user/login', userData, {
        headers: {
          "content-type": "application/json",
        }
      });

      
      setLoading(false);
      const user=res.data.data;
      localStorage.setItem("userData",JSON.stringify(user));

     
      navigate('/app/welcome');
      toast.success("Login Success");
    
    }

    catch (err) {
  
      toast.error(err.response.data.message,{
        duration: 2000,
      });
     
    }

  }

  const signupHandler = async () => {
    setLoading(true);

    const userData = { name: formData.name, email: formData.email, password: formData.password }

    try {
      const res = await axios.post('http://localhost:5000/user/register', userData, {
        headers: {
          "content-type": "application/json",
        }
      });

     setLoading(false);
     const user=res.data.data;
     localStorage.setItem("userData",JSON.stringify(user));
     navigate('/app/welcome');
  

    }

    catch (err) {
      toast.error(err.response.data.message,{
        duration: 2000,
      });
    }
  }





  const toggleForm = () => {
    setIsLogin((pre) => !pre);
  }


  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();

     formData.name = formData.name.trim();
      formData.email = formData.email.trim();
      formData.password = formData.password.trim();

    if (isLogin) {
      if(!formData.name  || !formData.password ) {
        toast.error("Please fill all the fields !!",{
          duration: 2000,
        }); 
      
        return;
      }
      loginHandler();
    }
    else {
      if(!formData.name  ||!formData.password ||!formData.email ) {
        toast.error("Please fill all the fields !!",{
          duration: 2000,
        });
        return;
      }
      signupHandler();
    }
  }


  return (
    <div className={style.LoginContainer} >
      <div className='flex-[0.3] flex flex-col gap-4 items-center bg-blue-50 rounded-l-xl justify-center'>
        <img src="../icons/chatIcon.png" alt='icon' className='w-[80%]' />
        <p className='font-bold md:text-xl'>LetsChat</p>
      </div>
      <form className='flex-[0.7] rounded-r-xl flex justify-center items-center text-center'>
        <div className=' flex flex-col w-fit gap-3  md:w-[35%]' >
          <p className='text-blue-500 font-bold text-lg'>{isLogin ? 'Login to your Account' : "SignUp to your Account"}</p>
          <input
            type='text'
            id="name"
            name="name"
            value={formData.name}
            placeholder='Enter name'
            className='p-2 rounded-md shadow border w-full outline-none text-sm'
            onChange={changeHandler} 
            
            />

          {!isLogin && <input
            type='email'
            id="email"
            name="email"
            value={formData.email}
            placeholder='Enter email'
            className='p-2 rounded-md shadow border w-full outline-none text-sm '
            onChange={changeHandler}
            
          />}
          <div className='relative shadow rounded-md border'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              value={formData.password}
              placeholder='Enter Password'
              className='p-2 rounded-md  w-full outline-none text-sm'
              onChange={changeHandler}
              
            />
            <div
              className='absolute inset-y-0   right-0 pr-3 flex items-center cursor-pointer '
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>

          <button type='submit' className=' shadow border text-white bg-green-400 font-bold h-8 rounded-md active:bg-green-400 hover:bg-green-500' onClick={submitHandler}>{isLogin ? "Login" : "SignUp"}</button>

          {isLogin ? <p onClick={toggleForm} className='text-green-500 text-sm font-semibold'>Don't have an Account ? <strong className='cursor-pointer text-red-400 hover:text-red-500 active:text-red-600'>Sign Up</strong></p> : <p onClick={toggleForm} className='text-green-500 text-sm font-semibold'>I have Already an Account ? <strong className='cursor-pointer text-red-400 hover:text-red-500 active:text-red-600' >LogIn</strong></p>}
        </div>
      </form>
      <Toaster/>
    </div>
  )
}

export default Login;