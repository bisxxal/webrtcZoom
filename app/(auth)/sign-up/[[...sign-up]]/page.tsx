import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <main className=' h-screen w-full flex justify-center items-center'>
        <SignUp />
    </main>
  )
}

export default SignUpPage