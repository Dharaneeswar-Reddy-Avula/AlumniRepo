import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
const RequestLost=()=>{
    return(
        <div className='flex w-full  mt-10 md:mt-20 justify-center items-center'>
        <div className='flex flex-col my-10  gap-4 w-[90%] md:w-[600px] rounded-md  shadow-md shadow-blue-950 py-4 px-8'>
            <div className='text-[20px]  font-bold text-black'>Request Lost Documents</div>
            
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-semibold text-black'>Name<span className="text-[red]">*</span></label>
                    <input type="text" placeholder='examplename' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="rguktid" className='font-semibold text-black'>ID No<span className="text-[red]">*</span></label>
                    <input type="text" placeholder='1234' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="mail" className='font-semibold text-black'>E-mail<span className="text-[red]">*</span></label>
                    <input type="email" placeholder='examplename@gmail.com' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="pwd" className='font-semibold text-black'>Mobile No<span className="text-[red]">*</span></label>
                    <input type="text" placeholder='........' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="domain" className='font-semibold text-black'>Branch<span className="text-[red]">*</span></label>
                    <input type="text" placeholder='cse' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="domain" className='font-semibold text-black'>Graduation Year<span className="text-[red]">*</span></label>
                    <input type="text" placeholder='cse' className='w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="domain" className='font-semibold text-black'>Graduation Year<span className="text-[red]">*</span></label>
                    <textarea rows="5" palceholder="Eg:Study Certificate" className="w-full p-1 px-2 border border-black  rounded-md outline-none focus:border-blue-950"></textarea>
                </div>

                <div className='flex flex-col gap-2'>
    <label htmlFor="domain" className='font-semibold text-black'>
        Identification Proof<span className="text-[red]">*</span>
    </label>
    <div className="relative w-full">
        <FaArrowUp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-[20px]" />
        <input 
            type="text" 
            placeholder='Upload' 
            className='w-full p-1 pl-8 px-2 border border-black rounded-md outline-none focus:border-blue-950' 
        />
    </div>
</div>


                <div>
                <label htmlFor="photo" className='font-semibold text-black'>Upload Photo<span className="text-[red]">*</span></label>
            
               
                <div className="flex flex-row gap-[5px] "><input type="checkbox" className="md:mt-[-20px] mt-[-70px]"/>
                <div>I hearby declare that the information produced above is true and accurate to the est of my knowledge</div>
                </div>
                </div>
                <div className="flex flex-row justify-between">
                <button className='w-[100px] rounded-md bg-gray-300 text-[black] text-center py-1  text-lg font-semibold'>Back</button>
                    <button className='w-[100px] rounded-md bg-blue-950 text-white text-center py-1  text-lg font-semibold'>Submit</button>
                </div>

            </form>
            <hr />
          
            

           
            


        </div>

    </div>
    );
}
export default RequestLost;