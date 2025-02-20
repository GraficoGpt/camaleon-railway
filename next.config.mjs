/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '', // Deja vacío si no se necesita un puerto específico
                pathname: '/**', // Permite cualquier ruta
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'static/videos/',
                },
            },
        });
        return config;
    },
};

export default nextConfig;
