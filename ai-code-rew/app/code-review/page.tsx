'use client';

import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import axios from 'axios';

export default function CodeReviewPage() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`);
  const [review, setReview] = useState('');

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ai/get-review`, { code });














      setReview(response.data.review);
    } catch (err) {
      console.error('Code review error', err);
      setReview('Failed to get review. Check backend or network.');
    }
  }

  return (
    <main className="flex h-screen gap-6 p-6 bg-zinc-900">
      {/* Left Editor */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 border text-white border-gray-300 rounded-md overflow-auto">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: '100%',
              width: '100%',
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          className="mt-4  inline-block bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold text-lg py-2.5 px-3sm:px-10 rounded-full transition-all duration-300 transform hover:scale-95 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 "
        >



          Review
        </button>
      </div>

      {/* Right Markdown Review */}
      <div className="flex-1 border border-gray-300  rounded-md p-4 overflow-auto bg-zinc-900 text-white">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}
