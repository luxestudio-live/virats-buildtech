// Helper to get the correct image path based on basePath
export function getImagePath(src) {
  if (!src) return src;
  
  // If it's an external URL, return as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If it's a relative path starting with /, add basePath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  return src;
}
