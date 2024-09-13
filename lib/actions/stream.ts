// 'use server';
// import { currentUser } from '@clerk/nextjs/server';
// import { StreamSfuClient } from '@stream-io/video-react-sdk';

// const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

//  const tokenProvider = async () => {
//   const user = await currentUser();
// console.log('user', user?.id);

//   if (!user) {
//     console.error('User is not authenticated');
//     throw new Error('User is not authenticated');
//   }
//   if (!STREAM_API_KEY) {
//     console.error('Stream API key is missing');
//     throw new Error('Stream API key is missing');
//   }
//   if (!STREAM_API_SECRET) {
//     console.error('Stream API secret is missing');
//     throw new Error('Stream API secret is missing');
//   }

//     const streamClient = new StreamSfuClient(STREAM_API_KEY);

//     const expirationTime = Math.floor(Date.now() / 1000) + 3600;
//     const issuedAt = Math.floor(Date.now() / 1000) - 60;

//     const token = await streamClient.createToken(user.id, expirationTime, issuedAt);
    
//     return token;
 
// };
// export default tokenProvider;


// Install jsonwebtoken package if not already installed
// npm install jsonwebtoken

'use server'
import { currentUser } from '@clerk/nextjs/server';
import jwt from 'jsonwebtoken'; 

const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY; // Ensure your secret key is correctly set in environment variables.
 
export const tokenProvider =async () => {

  const user = await currentUser();
  if (!STREAM_API_SECRET) {
    throw new Error('Stream API secret is missing.');
  }

  try {
    // Define token payload
    const payload = {
      user_id: user?.id, // Set user-specific identifier
      role: 'user', // Customize the role based on your application's needs
    };

    // Define token options
    const options = {
      expiresIn: '1h', // Token expiration time, e.g., 1 hour
      issuer: 'stream', // Optional: Set the issuer (can be your app name or any identifier)
      audience: 'video', // Optional: Define audience if required by your setup
    };

    // Generate the token
    const token = jwt.sign(payload, STREAM_API_SECRET, options);

    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Failed to generate token.');
  }
};
 