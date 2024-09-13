import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <main className=' h-screen w-full flex justify-center items-center'>
        <SignIn />
    </main>
  )
}

export default SignInPage