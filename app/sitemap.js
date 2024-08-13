export default function sitemap() {
    return [
      {
        url: 'https://www.deandivizio.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.deandivizio.com/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://www.deandivizio.com/work',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.deandivizio.com/work/ovrtone',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://www.deandivizio.com/work/barkproductions',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    ]
  }