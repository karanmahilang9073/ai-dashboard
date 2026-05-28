import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen border-r p-4">
      <ul className="space-y-4">
        <li>
          <Link href='/'>Dashboard</Link>
        </li>
        <li>
          <Link href='/notes'>Notes</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/login'>Login</Link>
        </li>
      </ul>
    </aside>
  )
}