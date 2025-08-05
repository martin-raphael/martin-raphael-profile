import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure environment variables are exposed to the client-side when needed
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  /* config options here */
};

export default nextConfig;
