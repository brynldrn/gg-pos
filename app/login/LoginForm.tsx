'use client';

import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { FormEvent, useCallback } from 'react';


export default function LoginForm() {
  const handleSignin = useCallback((e: FormEvent) => {
    e.preventDefault();

    signIn('github', {
      redirect: true,
      callbackUrl: '/menu-list'
    })
  }, [])

  return (
    <form onSubmit={handleSignin}>
      <button 
        className='flex justify-center gap-3 border border-gray-200 rounded-lg shadow-lg p-5 shadow-white/10'
      >
        <Github />
        <span>Login with GitHub</span>
      </button>
    </form>
  )
}
