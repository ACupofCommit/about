'use client'

import { useState } from "react"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface PopoverImageProps {
  src: string
  text: string
  alt?: string
}

export function PopoverImage({ src, text, alt }: PopoverImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {text}
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        align="center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="relative w-[1024px] h-[768px]">
          <Image
            src={src}
            alt={alt || "Image"}
            fill
            className="object-contain"
            sizes="1024px"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
