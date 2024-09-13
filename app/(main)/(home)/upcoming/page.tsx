import CallList from '@/components/custom/CallList'
import React from 'react'

function Upcoming() {
  return (
    <div className=' flex w-full min-h-screen flex-col gap-10 text-white'>

      <CallList type='upcoming' /> 
      
    </div>
  )
}

export default Upcoming