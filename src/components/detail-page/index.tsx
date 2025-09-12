import { Fragment, useState, useEffect, Children } from 'react';
import { skeleton } from '../../utils';
import { useTheme } from '../../constants/ThemeContext';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import ReactMarkdown from 'react-markdown';

interface PageProps {
  loading?: boolean;
  title?: string;
  markdownPath?: string;
}

const DetailPage = ({ loading = false, title, markdownPath }: PageProps) => {
  const BG_COLOR = 'bg-base-200';
  const { theme } = useTheme();
  const { slug } = useParams<{ slug?: string }>();

  const [content, setContent] = useState<string>('');
  const [contentLoading, setContentLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState<string>(title || 'Documentation');

  // Determine which markdown file to load
  const getMarkdownPath = () => {
    if (markdownPath) return markdownPath;
    if (slug) return `/content/${slug}.md`;
    return '/content/default.md';
  };

  // Load markdown content
  useEffect(() => {
    console.log('DetailPage - Current theme:', theme);

    document.documentElement.setAttribute('data-theme', theme);
    console.log(
      'DetailPage - HTML data-theme is now:',
      document.documentElement.getAttribute('data-theme'),
    );

    const loadMarkdown = async () => {
      try {
        setContentLoading(true);
        const filePath = getMarkdownPath();
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Failed to load content from ${filePath}`);
        }

        const text = await response.text();

        // Extract title from markdown if not provided
        if (!title) {
          const titleMatch = text.match(/^# (.+)$/m);
          if (titleMatch) {
            setPageTitle(titleMatch[1]);
          }
        }
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
        setContent(
          '# Error\n\nFailed to load content. Please check if the markdown file exists.',
        );
      } finally {
        setContentLoading(false);
      }
    };

    loadMarkdown();
  }, [theme, title, markdownPath, slug]);

  // Wrap content in paragraphs

  return (
    <Fragment>
      <div className={`p-4 lg:p-10 min-h-screen ${BG_COLOR}`}>
        <div className="max-w-4xl mx-auto">
          <div className="card shadow-lg bg-base-100 bg-opacity-40">
            <div className="card-body p-8 lg:p-12">
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-base-content border-opacity-20">
                <h1 className="text-4xl font-bold text-base-content opacity-90 mb-4">
                  {loading || contentLoading
                    ? skeleton({ widthCls: 'w-96', heightCls: 'h-10' })
                    : pageTitle}
                </h1>

                <div className="flex items-center gap-4 text-sm text-base-content opacity-60">
                  {loading || contentLoading ? (
                    skeleton({ widthCls: 'w-48', heightCls: 'h-4' })
                  ) : (
                    // <span>Last updated: {new Date().toLocaleDateString()}</span>
                    <span></span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {loading || contentLoading ? (
                  <div className="space-y-6">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="space-y-3">
                        {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                        {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                        {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
                      </div>
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-error opacity-70">
                    <p>Error loading content: {error}</p>
                  </div>
                ) : (
                  <div className="markdown-content prose prose-lg max-w-none">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        h1: ({}) => (
                          <h1 className="text-3xl font-bold text-base-content opacity-90 mb-6 mt-8">
                            <></>
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-semibold text-base-content opacity-80 mb-4 mt-8">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-semibold text-base-content opacity-80 mb-3 mt-6">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-lg font-semibold text-base-content opacity-80 mb-3 mt-4">
                            {children}
                          </h4>
                        ),
                        h5: ({ children }) => (
                          <h5 className="text-base font-semibold text-base-content opacity-80 mb-2 mt-4">
                            {children}
                          </h5>
                        ),
                        h6: ({ children }) => (
                          <h6 className="text-sm font-semibold text-base-content opacity-80 mb-2 mt-3">
                            {children}
                          </h6>
                        ),
                        p: ({ children }) => (
                          <p className="text-base-content text-opacity-70 leading-relaxed mb-4">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside mb-4 text-base-content text-opacity-70 ">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside mb-4 text-base-content text-opacity-70 space-y-1">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-base-content text-opacity-70 leading-relaxed ml-4">
                            {children}
                          </li>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-blue-600 opacity-70 hover:opacity-100 hover:underline "
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="bg-base-200 text-base-content px-1 py-0.5 rounded text-sm font-mono">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-base-200 text-base-content p-4 rounded-lg my-4 overflow-x-auto">
                            {children}
                          </pre>
                        ),
                        img: ({ src, alt }) => (
                          <img
                            src={src}
                            alt={alt}
                            className="mx-auto block max-w-full h-auto"
                          />
                        ),
                        div: ({ children, style }) => (
                          <div style={style}>{children}</div>
                        ),
                      }}
                    >
                      {content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>

              {/* Back Button */}
              {!loading && !contentLoading && (
                <div className="mt-8 pt-6 border-t border-base-content border-opacity-20">
                  <button
                    onClick={() => window.history.back()}
                    className="btn btn-ghost text-base-content opacity-70 hover:opacity-100"
                  >
                    ← Back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DetailPage;
