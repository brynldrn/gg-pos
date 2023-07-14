'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';


export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignin = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
      callbackUrl: '/menu-list'
    })
    
    if (res?.error) {
      setError(true)
    } else if (res?.ok) {
      router.push('/menu-list')
    }
  }, [password, router, username])

  return (
    <form onSubmit={handleSignin}
      className='border border-zinc-700 p-5 shadow-white/10 shadow-lg rounded-md flex flex-col gap-3'>
      {error && <span className='text-sm text-red-400'>Invalid credentials!</span>}
      <input type="text"
        name="username"
        id="username"
        placeholder='Username'
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        className='bg-transparent border border-zinc-700 p-2 text-zinc-300 rounded-md placeholder:text-zinc-700' />
      <input type="password"
        name="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className='bg-transparent border border-zinc-700 p-2 text-zinc-300 rounded-md placeholder:text-zinc-700' />
      <button 
        className='flex justify-center gap-3 border border-zinc-700 rounded-lg px-5 w-full py-2 '
      >
        Log in
      </button>
    </form>
  )
}
