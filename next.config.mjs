import createNextIntlPlugin from "next-intl/plugin";
import withMDX from "@next/mdx";
import { withBotId } from "botid/next/config";
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Compile validation of env variables
jiti("./src/env.ts");

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "sxvlta3onkp6zlqr.public.blob.vercel-storage.com",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/": ["src/content/emails/**"],
  },
  async rewrites() {
    return [
      {
        source: "/talks/freelancing-with-ai",
        destination: "/talks/freelancing-with-ai/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/chat",
        destination: "https://calendar.app.google/KvZAYd9okNjiY7iBA",
        permanent: true,
      },
      {
        source: "/cv",
        destination:
          "https://drive.google.com/file/d/1NuWgWSZWU2axtO_P8xOpTYTWfG5XptAY/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/articles/:path*",
        destination: "/blog/:path*",
        permanent: false,
      },
    ];
  },
};

export default withBotId(withMDX()(withNextIntl(nextConfig)));
