import { MetadataRoute } from 'next';

// Ensure Next builds this once as a static file (no dynamic revalidation)
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.xdstudiogg.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
