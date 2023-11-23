// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
// next.config.js

module.exports = {
    // other existing configurations here...

    // https://stackoverflow.com/questions/74038400/convert-css-module-kebab-case-class-names-to-camelcase-in-next-js
    webpack: (config) => {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === 'object')
            .oneOf.filter((rule) => Array.isArray(rule.use));
        rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
                if (
                    moduleLoader.loader !== undefined &&
                    moduleLoader.loader.includes('css-loader') &&
                    typeof moduleLoader.options.modules === 'object'
                ) {
                    moduleLoader.options = {
                        ...moduleLoader.options,
                        modules: {
                            ...moduleLoader.options.modules,
                            exportLocalsConvention: 'camelCase', // <---=<<<
                        },
                    };
                }
            });
        });

        return config;
    },
};
