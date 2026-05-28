import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-gray-200 shadow-lg">
      <ul className="p-4 space-y-2">
        
        <li>
          <Link
            href="/"
            className="block px-4 py-3 rounded-lg font-bold hover:bg-gray-400 transition-colors"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/notes"
            className="block px-4 py-3 rounded-lg font-bold hover:bg-gray-400 transition-colors"
          >
            Notes
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="block px-4 py-3 rounded-lg font-bold hover:bg-gray-400 transition-colors"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/login"
            className="block px-4 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors"
          >
            Login
          </Link>
        </li>

      </ul>
    </aside>
  )
}