/**
 * Get the correct asset path for both development and production
 * For custom domain (arihantfood.in), assets are served from root
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always use root path for custom domain deployment
  return `/${cleanPath}`;
};
