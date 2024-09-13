import CallList from '@/components/custom/CallList'
import React from 'react'

function Recordings() {
  return (
    <div className=' flex w-full min-h-screen flex-col gap-10 text-white'>

    <CallList type='recordings' /> 
    
  </div>
  )
}

export default Recordings