/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for shared hosting (Libyan Spider / cPanel / Apache)
  // Build locally with `pnpm build`, then upload only the `out/` folder to public_html/
  // Do NOT run `next build` or `next start` on the server — it will fail (LVE/WebAssembly limits)
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export (no Next.js image optimization server)
  },
}

export default nextConfig
