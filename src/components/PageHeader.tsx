'use client'

import { ThemeToggleButton } from "@/components/ThemeToggleButton"

export function PageHeader() {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alfred</h1>
        <div className="z-50 relative">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
