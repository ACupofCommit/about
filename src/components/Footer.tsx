export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center space-y-1">
        <p className="text-gray-600 dark:text-gray-400">© 2026 A Cup of Commit (커밋한잔) All rights reserved.</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          사업자등록번호 735-38-01340 ·{" "}
          <a href="mailto:help@commit2.app" className="hover:underline">
            help@commit2.app
          </a>
        </p>
      </div>
    </footer>
  )
}
