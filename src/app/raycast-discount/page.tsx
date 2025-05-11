import type React from "react"
import Image from "next/image"
import { PageHeader } from "@/components/PageHeader"
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
                  Raycast Pro 또는 Teams Pro와 같은 Raycast 모든 유료 플랜을 10% 할인 가격에 이용하세요.
                  첫 결제는 물론 매 반복 결제마다 계속 10% 할인된 가격이 적용됩니다.
                  아래 버튼을 눌러 Raycast로 이동하여 로그인하고 결제하면 됩니다.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  - 결제 전 아래 스크린샷과 같이 10% 할인 적용을 꼭 확인하세요.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  - 기존 구독자는 기존 결제가 끝나고 새 결제를 시작할 때 적용할 수 있습니다.
                </p>
                <RaycastDiscountLink />
              </div>
            </div>
          </div>
        </section>

        {/* 스크린샷 섹션 */}
        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Raycast Pro 플랜 결제 시</h3>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/raycast-discount-screenshot-1.png"
                alt="Raycast 10% 할인 적용 스크린샷"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Pro + Advanced AI 플랜 결제 시</h3>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/raycast-discount-screenshot-2.png"
                alt="Raycast 10% 할인 적용 스크린샷"
                fill
                className="object-contain rounded-lg"
                priority
              />
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
