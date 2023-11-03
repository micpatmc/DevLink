'use client';
// images
import bg from '@images/earth.png';
import Image from 'next/image';
import HomeBar from '@components/common/HomeBar';
import { auth } from '@/firebase/clientApp';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Loading from '@components/common/Loading';

export default function Landing() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    router.push('/dev/home');
    return <Loading />;
  } else if (loading) {
    return <Loading />;
  } else {
    console.log('no user signed in');
  }

  return (
    <>
      <HomeBar />
      <main className="relative flex flex-col justify-center items-center back-ground w-screen h-screen overflow-hidden">
        <Image
          src={bg}
          alt="Earth"
          className="absolute -z-10 w-[200vh] h-auto -rotate-[83deg] -bottom-[25rem] -right-[25rem]"
        />
        <div className="flex flex-row items-center h-screen ml-16 w-[80%] max-w-screen-2xl">
          <div className="tag-line">Connecting Minds, Creating Futures.</div>
        </div>
      </main>
    </>
  );
}
