/** @type {import('next').NextConfig} */

//require("dotenv").config({ path: ".env.local" });
const nextConfig = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "images.pexels.com",
      "cdni.iconscout.com",
      "ik.imagekit.io",


      "images.wsj.net"

    ],
  },
};

const removeImports = require("next-remove-imports")();
module.exports = removeImports({});
module.exports = nextConfig;
