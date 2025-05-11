'use client'

import Link from "next/link"
import Image from "next/image"
import { ThemeToggleButton } from "@/components/ThemeToggleButton"

export function PageHeader() {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/a-cup-of-commit.png"
              alt="커밋한잔 로고"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold">커밋한잔</span>
        </Link>
        <div className="z-50 relative">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
