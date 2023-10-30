const domainNamesToKeepFirstSlash = [
  'github.com',
  'twitter.com',
  'linkedin.com',
  'youtube.com',
  'medium.com',
];

const trimUrl = (url: string) => {
  // Extract the host from the URL
  const host = new URL(url).host;

  // Extract the domain without subdomains
  const domain = host.split('.').slice(-2).join('.');

  // If the domain is in the array, extract the first path segment
  if (domainNamesToKeepFirstSlash.includes(domain)) {
    const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      return `${domain}/${pathSegments[0]}`;
    }
  }

  return domain;
};

export default trimUrl;
