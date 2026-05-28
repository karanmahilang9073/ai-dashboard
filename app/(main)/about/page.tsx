import React from 'react'

function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">About AI Dashboard</h1>
          <p className="text-gray-600 mt-2">Your intelligent note-taking companion</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">What is AI Dashboard?</h2>
          <p className="text-gray-700">
            AI Dashboard is a modern note-taking application powered by AI. Create, organize, and analyze your notes with intelligent features.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Features</h3>
            <ul className="text-gray-700 space-y-1">
              <li>✓ Create & organize notes</li>
              <li>✓ AI summarization</li>
              <li>✓ File attachments</li>
              <li>✓ Search functionality</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Stack</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage