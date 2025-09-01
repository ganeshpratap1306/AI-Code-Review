"use client";

import React, { useState } from "react";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import { FaCopy } from "react-icons/fa";

// Prism language imports (needed for syntax highlighting)
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

interface LeftPanelProps {
  code: string;
  setCode: (code: string) => void;
  reviewCode: () => void;
  loading: boolean;
}

const LeftPanel = ({ code, setCode, reviewCode, loading }: LeftPanelProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2s
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <section className="w-full md:w-1/2 flex flex-col bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <header className="text-lg font-semibold p-4 border-b border-gray-800 bg-gray-800 sticky top-0 z-10 flex justify-between items-center">
        <span>Code Editor</span>
        <button
          onClick={() => copyToClipboard(code)}
          className="text-gray-400 hover:text-white relative"
        >
          <FaCopy />
          {copied && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-xs text-white px-2 py-1 rounded shadow-md">
              Copied!
            </span>
          )}
        </button>
      </header>

      {/* Editor */}
      <div className="flex-1 overflow-auto p-4">
        <Editor
          value={code}
          onValueChange={(code: string) => setCode(code)}
          highlight={(code: string) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={16}
          className="min-h-[300px] font-mono text-sm bg-gray-900 text-white focus:outline-none"
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 14,
          }}
        />
      </div>

      {/* Review Button */}
      <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold text-lg py-3.5 px-8 sm:px-12 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50">
        <button
          onClick={reviewCode}
          disabled={loading}
          className={`w-full md:w-auto bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition flex items-center justify-center ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading && (
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          )}
          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </div>
    </section>
  );
};

export default LeftPanel;
