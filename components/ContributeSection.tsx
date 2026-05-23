export default function ContributeSection() {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800/40">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-3xl mb-3 block">🌴</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Know a useful Kerala app?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          A curated directory of hyper-local web utilities and community-built tools across Kerala
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span>🔀</span> Via Pull Request
              </h3>
              <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                <li>Fork the GitHub repo</li>
                <li>Add your entry in <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">/data/apps.json</code></li>
                <li>Submit a Pull Request</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span>💬</span> Via GitHub Issue
              </h3>
              <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                <li>Open a new Issue</li>
                <li>Fill in the &quot;New App Submission&quot; template</li>
                <li>A maintainer will add it for you</li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/salmanfarisvp/appundo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://github.com/salmanfarisvp/appundo.in/issues/new?template=add-app.yml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Submit an App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
