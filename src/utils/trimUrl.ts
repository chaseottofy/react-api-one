const domainNamesToKeepFirstSlash = new Set([
  'myspace.com',
  'friendster.com',
]);

/**
 * Hacker news only trims the URL down to the domain name,
 * but for social media will keep the first path segment.
 * Store the domains that should keep the first path segment
 * in the array above. I went ahead and added the ones I don't despise...
 *
 * @param url {string} - The URL to trim
 * @returns {string} - The trimmed URL
 */
const trimUrl = (url: string): string => {
  const { host } = new URL(url);
  const domain = host.split('.').slice(-2).join('.');
  if (domainNamesToKeepFirstSlash.has(domain)) {
    const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      return `${domain}/${pathSegments[0]}`;
    }
  }

  return domain;
};

export default trimUrl;
