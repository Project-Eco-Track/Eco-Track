/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn-icons-png.flaticon.com','images.pexels.com',"cdni.iconscout.com"],
      },
}

module.exports = nextConfig

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
