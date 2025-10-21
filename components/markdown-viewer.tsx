"use client";

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  const renderMarkdown = (md: string) => {
    let html = md;

    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-[#00f6ff] mt-6 mb-3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-[#00f6ff] mt-8 mb-4">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-[#00f6ff] mt-10 mb-5">$1</h1>');

    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
      return `<div class="my-4 rounded-lg overflow-hidden border border-[#00f6ff]/20"><pre class="bg-[#0d0d0d] p-4 overflow-x-auto"><code class="text-[#33ff99] font-mono text-sm">${code.trim()}</code></pre></div>`;
    });

    html = html.replace(/`([^`]+)`/g, '<code class="px-2 py-1 bg-[#1e1e1e] text-[#33ff99] rounded font-mono text-sm">$1</code>');

    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-[#e0e0e0]">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em class="italic text-[#e0e0e0]">$1</em>');

    html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 text-[#e0e0e0] list-disc">$1</li>');

    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#00f6ff] hover:text-[#bb33ff] underline transition-colors duration-300" target="_blank" rel="noopener noreferrer">$1</a>');

    html = html.replace(/^(?!<[h|l|d|p])(.*$)/gim, (match) => {
      if (match.trim() === '') return '<br/>';
      if (match.startsWith('<')) return match;
      return `<p class="mb-4 text-[#e0e0e0] leading-relaxed">${match}</p>`;
    });

    return html;
  };

  return (
    <div
      className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}
