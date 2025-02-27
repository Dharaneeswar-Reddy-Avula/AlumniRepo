import React from 'react'
import UpComing from './UpComing'
import PastReunions from './PastReunions'
const Reunion = () => {
  return (
    <div className='flex flex-col gap-4 md:mt-[100px] mt-[80px] lg:mt-[160px]'>
      <UpComing/>
      <PastReunions/>

    </div>
  )
}

export default Reunion