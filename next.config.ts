import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lacanian-survey",
  allowedDevOrigins: ["192.168.0.169", "*.trycloudflare.com"],
};

export default nextConfig;
