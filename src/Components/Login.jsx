import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios"; 

const Login = ({ isVisible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
 
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    phone: ""
  });
  

  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    rguktId: "",
    password: "",
    phone: "",
    workingDomain: ""
  });

  if (!isVisible) return null;
  
  const signin = () => {
    setIsSignUp(false);
    setError("");
    setSuccessMessage("");
  };
  
  const signup = () => {
    setIsSignUp(true);
    setError("");
    setSuccessMessage("");
  };


  const handleSignInChange = (e) => {
    const { id, value } = e.target;
    setSignInData({
      ...signInData,
      [id]: value
    });
  };

  const handleSignUpChange = (e) => {
    const { id, value } = e.target;
    setSignUpData({
      ...signUpData,
      [id]: value
    });
  };


  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");
    
    try {
      const response = await axios.post('http://localhost:9990/auth/login', {
        email: signInData.email,
        password: signInData.password
      });
      
      setSuccessMessage("Login successful!");
      
   
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.alumni));
      
 
      setTimeout(() => {
        onClose();
     
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");
    
    try {
      const response = await axios.post('http://localhost:9990/auth/signup', {
        username: signUpData.username,
        email: signUpData.email,
        rguktId: signUpData.rguktId,
        password: signUpData.password,
        phone: signUpData.phone
        
      });
      
      setSuccessMessage("Registration successful! You can now login.");
      
 
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.alumni));
      
    
      setTimeout(() => {
        setIsSignUp(false);
      }, 1500);
      
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[200]"
      onClick={onClose}
    >
      <div
        className="bg-white p-2 md:p-6 rounded-lg w-[90%] md:w-[440px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <RxCross2 className="text-[20px] cursor-pointer" onClick={onClose}/>
        </div>

        <h2 className="text-3xl text-center font-bold text-blue-950 mb-4">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        
        {/* Error and success messages */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            {successMessage}
          </div>
        )}
        
        <div className="border border-gray-150 border-t-0 pb-[5px]">
          <div className="flex flex-row">
            <div
              className={`text-[20px] font-bold cursor-pointer ${
                !isSignUp
                  ? "text-blue-950 h-[40px] w-[210px] border-t-[2px] border-[green] flex justify-center items-center"
                  : "text-gray-500 bg-gray-300 h-[40px] w-[210px] flex justify-center items-center"
              }`}
              onClick={signin}
            >
              Sign In
            </div>
            <div
              className={`text-[20px] font-bold cursor-pointer ${
                isSignUp
                  ? "text-blue-950 h-[40px] w-[210px] border-t-[2px] border-[green] flex justify-center items-center"
                  : "text-gray-500 bg-gray-300 h-[40px] w-[210px] flex justify-center items-center"
              }`}
              onClick={signup}
            >
              Sign Up
            </div>
          </div>
          
          {/* Sign In Form */}
          {!isSignUp &&
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="email" className="font-semibold text-blue-950">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={signInData.email}
                onChange={handleSignInChange}
                placeholder="examplename@gmail.com"
                className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="password" className="font-semibold text-blue-950">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={signInData.password}
                onChange={handleSignInChange}
                placeholder="........"
                className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="phone" className="font-semibold text-blue-950">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={signInData.phone}
                onChange={handleSignInChange}
                maxLength={10}
                placeholder="1234567890"
                className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-[90%] bg-blue-950 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 disabled:bg-blue-300"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>}
          
          {/* Sign Up Form */}
          {isSignUp && 
          <form className="flex mt-4 flex-col gap-4" onSubmit={handleSignUp}>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-2 ml-[20px]">
                <label htmlFor="username" className="font-semibold text-blue-950">Name</label>
                <input 
                  type="text" 
                  id="username" 
                  value={signUpData.username}
                  onChange={handleSignUpChange}
                  placeholder="examplename" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="rguktId" className="font-semibold text-blue-950">Rgukt Id</label>
                <input 
                  type="text" 
                  id="rguktId" 
                  value={signUpData.rguktId}
                  onChange={handleSignUpChange}
                  placeholder="1234" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-2 ml-[20px]">
                <label htmlFor="email" className="font-semibold text-blue-950">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  placeholder="examplename@gmail.com" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-semibold text-blue-950">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  placeholder="........" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-2 ml-[20px]">
                <label htmlFor="workingDomain" className="font-semibold text-blue-950">Working Domain</label>
                <input 
                  type="text" 
                  id="workingDomain" 
                  value={signUpData.workingDomain}
                  onChange={handleSignUpChange}
                  placeholder="cse" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold text-blue-950">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={signUpData.phone}
                  onChange={handleSignUpChange}
                  maxLength={10}
                  placeholder="1234567890" 
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="photo" className="font-semibold text-blue-950">Upload Photo (optional)</label>
              <input 
                type="file" 
                id="photo" 
                className="w-[90%] flex justify-between"
                // Not handling file upload as per requirements
              />
              <p className="text-xs text-gray-500">Photo upload is for UI preview only and won't be sent to the server</p>
            </div>
            <div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-[90%] ml-[20px] rounded-md bg-blue-950 text-white text-center py-1 text-lg font-semibold disabled:bg-blue-300"
              >
                {isLoading ? "Registering..." : "Submit"}
              </button>
            </div>
          </form>}
          
          <hr className="my-4" />
          <div className="text-center">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-950 font-semibold cursor-pointer"
                  onClick={() => setIsSignUp(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  className="text-blue-950 font-semibold cursor-pointer"
                  onClick={() => setIsSignUp(true)}
                >
                  Register
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
