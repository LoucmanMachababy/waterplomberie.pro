import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Force l'utilisation de Webpack au lieu de Turbopack
  experimental: {
    turbo: false
  },
  // Configuration Webpack personnalisée si nécessaire
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimisations Webpack personnalisées
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};

export default nextConfig;
