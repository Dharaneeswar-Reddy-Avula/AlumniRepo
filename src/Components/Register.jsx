import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='flex w-full  mt-10 md:mt-20 justify-center items-center'>
        <div className='flex flex-col my-10  gap-4 w-[90%] md:w-[440px] rounded-md shadow-md shadow-blue-950 py-4 px-8'>
            <div className='text-3xl text-center font-bold text-blue-950'>Register</div>
            
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-semibold text-blue-950 '>Name</label>
                    <input type="text" placeholder='examplename' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="rguktid" className='font-semibold text-blue-950 '>Rgukt Id</label>
                    <input type="text" placeholder='1234' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="mail" className='font-semibold text-blue-950 '>E-mail</label>
                    <input type="email" placeholder='examplename@gmail.com' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="pwd" className='font-semibold text-blue-950 '>Password</label>
                    <input type="password" placeholder='........' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="domain" className='font-semibold text-blue-950 '>Working Domain</label>
                    <input type="text" placeholder='cse' className='w-full p-1 px-2 border border-gray-300 shadow-md rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="photo" className='font-semibold text-blue-950 '>Upload Photo</label>
                    <input type="file" className='w-full flex justify-between'/>
                </div>
                <div>
                    <button className='w-full rounded-md bg-blue-950 text-white text-center py-1  text-lg font-semibold'>Submit</button>
                </div>

            </form>
            <hr />
            <div className='text-center'>
                Already have an account? <Link to='/login' className='text-blue-950 font-semibold cursor-pointer'>Login</Link>
            </div>
            

           
            


        </div>

    </div>
  )
}

export default Register