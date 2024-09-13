 
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import {tokenProvider} from '../lib/actions/stream';
import Loader from '@/components/custom/Loader';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, isLoaded } = useUser();
  
  useEffect(() => {
    const initializeClient = async () => {
      if (!isLoaded || !user) return;

      if (!apiKey) {
        console.error('Stream API key is missing');
        return;
      }

      try {
        const client = new StreamVideoClient({
          apiKey,
          user: {
            id: user.id,
            name: user.username || user.id,
            image: user.imageUrl,
          },
          tokenProvider,
        });

        setVideoClient(client);
      } catch (error) {
        console.error('Error initializing Stream Video Client:', error);
      }
    };

    initializeClient();
  }, [isLoaded, user]);

  if (!videoClient) {
    return  <Loader />;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
