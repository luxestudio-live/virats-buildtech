/**
 * Image optimization utilities for better loading performance
 */

/**
 * Generate a low-quality image placeholder (LQIP) base64 for blur effect
 * This is a generic 10x10 gray blur placeholder
 */
export const getBlurDataURL = () => 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

/**
 * Get optimized image loading attributes
 * @param {boolean} isPriority - Whether this image should load with priority
 * @returns {Object} - Object containing loading and decoding attributes
 */
export const getImageLoadingAttrs = (isPriority = false) => ({
  loading: isPriority ? 'eager' : 'lazy',
  decoding: 'async',
});

/**
 * Preload critical images for better initial page load
 * Call this in _app.js or layout component
 */
export const preloadCriticalImages = () => {
  if (typeof window !== 'undefined') {
    const criticalImages = [
      '/transparent-logo.png',
      '/pic1.jpg',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

/**
 * Get responsive image srcset for different screen sizes
 * Note: Since images.unoptimized is true, this returns the same image
 * In production with proper optimization, this would return different sizes
 */
export const getResponsiveSrcSet = (imagePath) => {
  // For static export, we just return the same image
  // In a server-rendered app with image optimization, you'd generate multiple sizes
  return `${imagePath} 1x, ${imagePath} 2x`;
};
