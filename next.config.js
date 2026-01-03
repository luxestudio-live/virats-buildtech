const isGithubPages = process.env.NEXT_PUBLIC_BASE_PATH;
const repoName = 'virats-buildtech';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
};
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}
