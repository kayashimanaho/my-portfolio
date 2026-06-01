export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white px-8 py-4">
      <nav className="flex justify-between items-center">
        <span className="font-bold text-lg">My Portfolio</span>
        <ul className="flex gap-6">
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}