import React, { useState, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import dp from "../assets/dp.jpg";
import { dataContext } from "../context/UserContext";
import axios from "axios"

function SignUp() {
  const { serverUrl } = useContext(dataContext);
  let navigate=useNavigate()
  let file=useRef(null)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      let data=await axios.post(serverUrl +"/api/signup",{
        firstName,
        lastName,
        userName,
        email,
        password,
      },{withCredentials:true})
      console.log(data);
    } 
    catch (error) {
      console.log(error.message);
    }

    

    // Signup API logic can be added here.
  };
let [frontendImage,setFrontendImage]=useState(dp)
let [backendImage,setBackendImage]=useState(null)
  function handleImage(e){
    let file=e.target.files[0]
    setBackendImage(file)
    let image=URL.createObjectURL(file)

    setFrontendImage(image)
  }

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-[90%] max-w-[500px] min-h-[500px] bg-[#141f1f] rounded-lg flex flex-col justify-center items-center py-8 gap-6">
        <h1 className="text-white text-[20px] font-semibold">
          Sign Up
        </h1>

        <form
          className="w-full flex flex-col items-center justify-center gap-[20px]"
          onClick={()=>{file.current.click()}}
        >
          <input type="file" hidden ref={file} onChange={handleImage}/>
          <div className="w-[100px] h-[100px] rounded-full bg-white overflow-hidden relative border-2 border-white">
            <img
              src={frontendImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />

            <div className="w-full h-full bg-black/50 top-0 left-0 absolute opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center text-white text-[20px] font-semibold transition" onClick={()=>handleImage()}>
              +
            </div>
          </div>

          <div className="w-[80%] flex justify-center items-center gap-[10px]">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Username"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

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
            Sign Up
          </button>
          <p className="text-white cursor-pointer">Already have an account? <span className="text-[#0080FE]" onClick={()=>navigate("/login")} >Login</span></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
