'use client'
import Loader from '@/components/custom/Loader';
import MettingRoom from '@/components/custom/MettingRoom';
import MettingSetup from '@/components/custom/MettingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';
function Meting({params:{id}}: { params:{ id: string}}) {
  const {user , isLoaded} = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const {call , isCallLoading} = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader />

 
  return (
    <main className=' h-screen w-full '>
     <StreamCall call={call}>
      <StreamTheme>
         {!isSetupComplete ?(<MettingSetup setIsSetupComplete={setIsSetupComplete} />):(<MettingRoom/>)}
      </StreamTheme>
     </StreamCall>
     
    </main>
  )
}

export default Meting