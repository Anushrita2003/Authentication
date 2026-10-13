import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataContext } from "../context/UserContext";
import axios from 'axios';

function Login() {
 const { serverUrl } = useContext(dataContext);
 let navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin=async(e)=>{
    e.preventDefault();

    try {
      let data=await axios.post(serverUrl +"/api/login",{
        email,
        password,
      },{withCredentials:true})
      console.log(data);
    } 
    catch (error) {
      alert(error.response.data.message)
    }

  }


  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-[90%] max-w-[500px] min-h-[500px] bg-[#141f1f] rounded-lg flex flex-col justify-center items-center py-8 gap-6">
        <h1 className="text-white text-[20px] font-semibold">
          Login
        </h1>

        <form
          className="w-full flex flex-col items-center justify-center gap-[20px]"
          onSubmit={handleLogin}
        >
          
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

          <button
            type="submit"
            className="w-[80%] h-[50px] bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="text-white cursor-pointer">Create new Account <span className="text-[#0080FE]" onClick={()=>navigate("/signup")} >Sign Up</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login