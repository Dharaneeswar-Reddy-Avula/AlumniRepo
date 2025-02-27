import React from 'react'
import Graph from '../Pages/GetInvolved/Graph'
const Fund = () => {
  return (
    <div>
        <div className="flex flex-col mt-8">
            <div className="text-2xl md:text-4xl font-bold">
                Fund raised by us:
            </div>
            <div className="w-[100%] ">
                <Graph/>
            </div>

        </div>
    </div>
  )
}

export default Fund