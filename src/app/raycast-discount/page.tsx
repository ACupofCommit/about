import type React from "react"
import Image from "next/image"
import { PageHeader } from "@/components/PageHeader"
import { PopoverImage } from "@/components/PopoverImage"
import { RaycastDiscountLink } from "@/components/RaycastDiscountLink"

export default function RaycastDiscountPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <PageHeader />

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/raycast-logo-key.png"
                    alt="Raycast Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Raycast Pro, Teams Pro 10% 할인</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span>Raycast 유료 플랜인 Pro 또는 Teams Pro 구독을 이 링크를 통해 결제하면 첫 결제는 물론 매 반복 결제마다 계속 10% 할인된 가격으로 결제할 수 있어요. 링크로 가서 로그인하고 결제 시 </span>
                  <PopoverImage src="/raycast-discount-screenshot.png" text="스크린샷" alt="Raycast 10% 할인 적용 스크린샷" />
                  <span>처럼 10% 할인 적용을 확인하고 결제하세요.</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  (기존 구독자는 기존 결제가 끝나고 새 결제를 시작할 때 적용할 수 있습니다.)
                </p>
                <RaycastDiscountLink />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 커밋한잔 All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
