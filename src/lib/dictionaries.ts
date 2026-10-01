export type Locale = "ko" | "en"

export const LOCALE_COOKIE = "lang"

const ko = {
  siteName: "커밋한잔",
  logoAlt: "커밋한잔 로고",
  hero: {
    title: "커밋한잔은 평생 쓸 반려 앱을 만듭니다",
    subtitle: "생산성 도구 · 웹 서비스 · 개발 콘텐츠",
    description:
      "유행 따라 바꾸는 도구가 아니라, 한 번 익히면 오래도록 곁에 두는 앱을 만듭니다. 인생 북마크 시스템 1Bookmark처럼 매일 쓰고, 평생 함께할 수 있는 서비스를 개발하고 있습니다.",
  },
  social: {
    blog: "블로그",
    x: "X (트위터)",
  },
  raycast: {
    title: "Raycast Pro, Teams Pro 10% 할인",
    description:
      "Raycast Pro 또는 Teams Pro와 같은 Raycast 모든 유료 플랜을 10% 할인 가격에 이용하세요. 첫 결제는 물론 매 반복 결제마다 계속 10% 할인된 가격이 적용됩니다. 아래 버튼을 눌러 Raycast로 이동하여 로그인하고 결제하면 됩니다.",
    checkBefore: "- 결제 전 ",
    checkScreenshot: "스크린샷",
    checkAfter: "과 같이 10% 할인 적용을 꼭 확인하세요.",
    checkBelow: "- 결제 전 아래 스크린샷과 같이 10% 할인 적용을 꼭 확인하세요.",
    existingSubscribers: "- 기존 구독자는 기존 결제가 끝나고 새 결제를 시작할 때 적용할 수 있습니다.",
    screenshotAlt: "Raycast 10% 할인 적용 스크린샷",
    button: "Raycast Pro 10% 할인 받기",
    proPlan: "Raycast Pro 플랜 결제 시",
    proAiPlan: "Pro + Advanced AI 플랜 결제 시",
  },
  oneBookmark: {
    title: "1Bookmark - 인생 북마크 시스템",
    description:
      "당신의 모든 북마크를 한 곳에서 관리하고, 팀 스페이스를 만들어 팀에서 공유하는 북마크도 관리하세요. 웹, 데스크톱(macOS·Windows·Linux), 모바일(iOS·Android) 어디서든 같은 북마크를 쓰고, 고도화된 검색으로 원하는 웹 페이지와 슬랙 채널까지 빠르게 열 수 있습니다.",
    button: "시작하기",
  },
  upcoming: {
    description: "AI 동료와 함께하는 복식부기 가계부, 라이프 트래킹 앱",
    button: "Coming soon",
  },
  footer: {
    copyright: "© 2026 A Cup of Commit (커밋한잔) All rights reserved.",
    businessNumber: "사업자등록번호 735-38-01340",
  },
}

export type Dictionary = typeof ko

const en: Dictionary = {
  siteName: "A Cup of Commit",
  logoAlt: "A Cup of Commit logo",
  hero: {
    title: "A Cup of Commit builds companion apps you'll use for life",
    subtitle: "Productivity tools · Web services · Developer content",
    description:
      "Not tools you swap out with every trend, but apps that stay by your side once you've learned them. Like 1Bookmark, our lifelong bookmark system, we build services you'll use every day and keep for a lifetime.",
  },
  social: {
    blog: "Blog",
    x: "X (Twitter)",
  },
  raycast: {
    title: "10% off Raycast Pro and Teams Pro",
    description:
      "Get 10% off every paid Raycast plan, including Pro and Teams Pro. The discount applies not only to your first payment but to every renewal. Click the button below to go to Raycast, sign in, and check out.",
    checkBefore: "- Before checkout, make sure the 10% discount is applied as shown in this ",
    checkScreenshot: "screenshot",
    checkAfter: ".",
    checkBelow: "- Before checkout, make sure the 10% discount is applied as shown in the screenshots below.",
    existingSubscribers: "- Existing subscribers can apply it when starting a new subscription after the current one ends.",
    screenshotAlt: "Raycast 10% discount applied screenshot",
    button: "Get 10% off Raycast Pro",
    proPlan: "Checking out Raycast Pro",
    proAiPlan: "Checking out Pro + Advanced AI",
  },
  oneBookmark: {
    title: "1Bookmark - Your lifelong bookmark system",
    description:
      "Manage all your bookmarks in one place, and create team spaces to manage bookmarks shared with your team. Use the same bookmarks everywhere — web, desktop (macOS·Windows·Linux), and mobile (iOS·Android) — and open the web pages and Slack channels you need in an instant with powerful search.",
    button: "Get started",
  },
  upcoming: {
    description: "A double-entry budgeting and life-tracking app with an AI teammate",
    button: "Coming soon",
  },
  footer: {
    copyright: "© 2026 A Cup of Commit. All rights reserved.",
    businessNumber: "Business Registration No. 735-38-01340",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { ko, en }
