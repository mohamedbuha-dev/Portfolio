import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "typescript", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
      {title && (
        <div className="px-6 py-3 bg-gray-800/50 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-3 text-sm text-gray-400">{title}</span>
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wide">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-gray-300 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
        
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm text-gray-100 font-mono leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
