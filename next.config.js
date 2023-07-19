/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://github.com/sanity-io/sanity-plugin-mux-input/issues/252#issuecomment-1557264695
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
