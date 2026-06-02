"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-gray-800 text-white px-8 py-4">
      <nav className="flex justify-between items-center">
        <span className="font-bold text-lg">My Portfolio</span>

        {/* PC用メニュー */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* ハンバーガーボタン（スマホのみ表示） */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* スマホ用ドロワーメニュー */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </header>
  )
}