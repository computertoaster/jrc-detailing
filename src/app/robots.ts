import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Site taken out of live visibility - block all crawlers
  return {
    rules: [
      { userAgent: '*', disallow: '/' },
    ],
  }
}
