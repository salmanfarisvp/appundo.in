export default function ContributeSection() {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800/40">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-3xl mb-3 block">🌴</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Know a useful Kerala app?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
            This directory is community-driven. Submit any web app that&apos;s useful for people in Kerala — government services, local tools, weather, transport, and more.
          </p>

          <a
            href="https://forms.gle/ANeJd1X2dY2fxcsa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Submit an App
          </a>
        </div>
      </div>
    </section>
  );
}
