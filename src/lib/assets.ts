/**
 * Get the correct asset path for both development and production
 * In development, assets are served from root
 * In production (GitHub Pages), assets are served from /dairy-delights-curves/
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the repository name
  if (import.meta.env.MODE === 'production') {
    return `/dairy-delights-curves/${cleanPath}`;
  }
  
  // In development, use root path
  return `/${cleanPath}`;
};
