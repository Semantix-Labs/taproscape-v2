const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your site's base URL
const SITE_URL = 'https://www.taproscapes.com/';

(async () => {
  // Static paths
  const staticPaths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/AboutUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/ContractUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/Gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/Destination', changefreq: 'monthly', priority: 0.8 },
    { url: '/TourPackages', changefreq: 'monthly', priority: 0.8 },
  ];

  // Example function to fetch dynamic paths (e.g., blog posts)
  const getDynamicPaths = async () => {
    // Replace this with your actual data-fetching logic
    // Example with mock data:
    const posts = [
      { slug1: 'packages', slug: '1', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '2', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '3', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '4', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '5', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '6', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '7', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '8', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '9', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '10', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'packages', slug: '11', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'destinations', slug: 'Sigiriya', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'destinations', slug: 'Galle', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'destinations', slug: 'NuwaraEliya', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'destinations', slug: 'Ella', changefreq: 'weekly', priority: 0.9 },
      { slug1: 'destinations', slug: 'Yala', changefreq: 'weekly', priority: 0.9 },
    ];

    return posts.map(post => ({
      url: `/${post.slug1}/${post.slug}`,
      changefreq: post.changefreq,
      priority: post.priority,
    }));
  };

  // Fetch dynamic paths
  const dynamicPaths = await getDynamicPaths();

  // Combine static and dynamic paths
  const allPaths = [...staticPaths, ...dynamicPaths];

  // Create a sitemap stream
  const stream = new SitemapStream({ hostname: SITE_URL });

  // Generate the sitemap XML
  const xmlData = await streamToPromise(Readable.from(allPaths).pipe(stream)).then(data => data.toString());

  // Save the sitemap to the public directory
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), xmlData);

  // Generate robots.txt content
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: ${SITE_URL}sitemap.xml
  `;

  // Save robots.txt to the public directory
  fs.writeFileSync(path.resolve(__dirname, 'public', 'robots.txt'), robotsTxt.trim());

  console.log('Sitemap and robots.txt generated successfully!');
})();
