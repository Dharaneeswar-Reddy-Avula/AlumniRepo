import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Login = ({ isVisible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // State to track active mode
   const[isSignIn,serIsSignIn]=useState(false);
  if (!isVisible) return null;
  const signin = () => {
    setIsSignUp(false);
    setIsSignIn(true);
  };
  const signup = () => {
    setIsSignUp(true);
    setIsSignIn(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[200]"
      onClick={onClose}
    >
      <div
        className="bg-white p-2 md:p-6 rounded-lg  w-[90%] md:w-[440px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/*<button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          onClick={onClose}
        >
          X
        </button>*/}
        <div className="flex justify-end">
  <RxCross2 className="text-[20px]" onClick={onClose}/>
</div>

        <h2 className="text-3xl text-center font-bold text-blue-950 mb-4">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        
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
          {!isSignUp &&
          <form className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="mail" className="font-semibold text-blue-950">
                E-mail
              </label>
              <input
                type="email"
                id="mail"
                placeholder="examplename@gmail.com"
                className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
              />
            </div>
            <div className="flex flex-col gap-2 ml-[20px]">
              <label htmlFor="pwd" className="font-semibold text-blue-950">
                Password
              </label>
              <input
                type="password"
                id="pwd"
                placeholder="........"
                className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
              />
            </div>
              <div className="flex flex-col gap-2 ml-[20px]">
                <label htmlFor="phn" className="font-semibold text-blue-950">
                  Phone number
                </label>
                <input
                  type="number"
                  id="phn"
                  maxLength={10}
                  placeholder="1234-567-890"
                  className="w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950"
                />
              </div>
            <button
              type="submit"
              className="w-[90%] bg-blue-950 ml-[20px] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
            >
             Login
            </button>
          </form>}
          
          {isSignUp && <form className='flex mt-4 flex-col gap-4'>
            <div className="flex flex-row justify-between w-full">
                <div className=' flex flex-col gap-2 ml-[20px]'>
                    <label htmlFor="name" className='font-semibold text-blue-950 '>Name</label>
                    <input type="text" placeholder='examplename' className='w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="rguktid" className='font-semibold text-blue-950 '>Rgukt Id</label>
                    <input type="text" placeholder='1234' className='w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                <div className=' flex flex-col gap-2 ml-[20px]'>
                    <label htmlFor="mail" className='font-semibold text-blue-950 '>E-mail</label>
                    <input type="email" placeholder='examplename@gmail.com' className='w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="pwd" className='font-semibold text-blue-950 '>Password</label>
                    <input type="password" placeholder='........' className='w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                <div className=' flex flex-col gap-2 ml-[20px]'>
                    <label htmlFor="domain" className='font-semibold text-blue-950 '>Working Domain</label>
                    <input type="text" placeholder='cse' className='w-[90%] p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="photo" className='font-semibold text-blue-950 '>Upload Photo</label>
                    <input type="file" className='w-[90%] flex justify-between'/>
                </div>
                </div>
                <div>
                    <button className='w-[90%] ml-[20px] rounded-md bg-blue-950 text-white text-center py-1  text-lg font-semibold'>Submit</button>
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
