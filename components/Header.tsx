import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='z-40 flex h-16 w-full items-center gap-6 rounded-2xl bg-white p-2 shadow'>
      <Image
        className='h-full rounded-xl'
        src='https://via.placeholder.com/100/100'
        alt='site-logo'
        width={50}
        height={50}
      ></Image>
      <Link href='/'>Add +</Link>
      <Link href='/history'>History</Link>
      <div className='ml-auto mr-1'>
        <UserButton />
      </div>
    </header>
  )
}
