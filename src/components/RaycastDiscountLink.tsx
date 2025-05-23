'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

const availableVia = [
  'alfred',
  'alfred-reddit',
  'alfred-daangn',
  'alfred-about',
  'alfred-youtube',
  'alfred-raycast-slack',
  'alfred-outsider'
]

function RaycastDiscountLinkContent() {
  const searchParams = useSearchParams()
  const currentPageVia = searchParams.get('via') || ''
  const via = availableVia.includes(currentPageVia) ? currentPageVia : 'alfred-about'

  return (
    <Link
      href={`https://raycast.com/?via=${via}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Button className="w-full bg-[#FF6363] hover:bg-[#FF4F4F] text-white text-lg py-6 cursor-pointer">
        Raycast Pro 10% 할인 받기
      </Button>
    </Link>
  )
}

export function RaycastDiscountLink() {
  return (
    <Suspense fallback={
      <Link
        href={`https://raycast.com/?via=alfred-about`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <Button className="w-full bg-[#FF6363] hover:bg-[#FF4F4F] text-white text-lg py-6 cursor-pointer">
          Raycast Pro 10% 할인 받기
        </Button>
      </Link>
    }>
      <RaycastDiscountLinkContent />
    </Suspense>
  )
}
