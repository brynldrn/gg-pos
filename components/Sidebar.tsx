'use client'

import classNames from 'classnames'
import { Cog, LineChart, LogOut, MenuSquare, User, Utensils, UtensilsCrossed } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useCallback } from 'react'
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const handleLogout = useCallback(() => signOut({
    callbackUrl: '/',
    redirect: true
  }), [])

  return (
    <aside className='w-72 bg-transparent border-r border-zinc-600 px-5 flex flex-col justify-between'>
      <div className='flex w-full justify-center items-center my-8'>
        <UtensilsCrossed size={50} />
      </div>

      <nav>
        <ul>
          <li>
            <Link 
              className={classNames('flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1', {
                'bg-zinc-600': pathname === '/'
              })}
              href="/"
            >
              <Utensils />
              <span>Menu List</span>
            </Link>
          </li>
          <li>
            <Link 
              className={classNames('flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1', {
                'bg-zinc-600': pathname === '/reports'
              })}
              href="/reports"
            >
              <LineChart />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link 
              className={classNames('flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1', {
                'bg-zinc-600': pathname === '/menu-management'
              })}
              href="/menu-management"
            >
              <MenuSquare />
              <span>Menu Management</span>
            </Link>
          </li>
          <li>
            <Link 
              className={classNames('flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1', {
                'bg-zinc-600': pathname === '/user-management'
              })}
              href="/user-management"
            >
              <User />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link 
              className={classNames('flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1', {
                'bg-zinc-600': pathname === '/settings'
              })}
              href="/settings"
            >
              <Cog />
              <span>App Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='mb-9 mt-auto'>
        <button className='flex gap-3 w-full px-2 py-3 rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out items-center m-1'
          onClick={handleLogout}>
          <LogOut />
          <span>Logout</span>
        </button>
      </nav>
      <span>v.0.0.1</span>
    </aside>
  )
}
