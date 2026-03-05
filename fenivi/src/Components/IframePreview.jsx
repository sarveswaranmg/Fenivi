import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * IframePreview Component
 * Safely embeds a website preview in an iframe with proper security settings
 * 
 * @param {string} url - The URL to embed in the iframe
 * @param {string} title - Title for the iframe (for accessibility)
 * @param {number} height - Height of iframe in pixels (default: 600)
 * @param {boolean} showFullscreenButton - Show button to open in new tab (default: true)
 */
export default function IframePreview({ 
  url, 
  title = "Project Preview", 
  height = 600,
  showFullscreenButton = true,
  className = ""
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!url) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-600">No preview URL available for this project.</p>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
        {/* Loading State */}
        {isLoading && (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10"
            style={{ height: `${height}px` }}
          >
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading preview...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div 
            className="absolute inset-0 bg-red-50 flex flex-col items-center justify-center z-10"
            style={{ height: `${height}px` }}
          >
            <div className="text-center px-6">
              <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 font-semibold mb-2">Unable to Load Preview</p>
              <p className="text-gray-600 text-sm mb-4">The preview couldn't be loaded. This might be due to security settings or the site being unavailable.</p>
              {showFullscreenButton && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Open in New Window
                </a>
              )}
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={url}
          title={title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          style={{ 
            height: `${height}px`,
            border: 'none',
            display: !hasError ? 'block' : 'none'
          }}
          className="w-full"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-presentation"
          loading="lazy"
        />
      </div>

      {/* Actions */}
      {!isLoading && !hasError && showFullscreenButton && (
        <div className="mt-4 flex justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ExternalLink size={16} />
            Open Full Page
          </a>
        </div>
      )}
    </div>
  );
}
