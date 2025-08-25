import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    // MDX options can go here if needed
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), browsing-topics=()"
          }
        ]
      }
    ]
  }
}

export default withMDX(nextConfig)
