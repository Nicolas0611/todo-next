import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tailus.io", "avatars.githubusercontent.com", "spng.pngfind.com"], // Agrega aquí los dominios permitidos
  },
};

export default nextConfig;
