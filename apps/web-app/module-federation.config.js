module.exports = {
    name: 'web-app',
    remotes: [],
    shared: (libraryName, config) => {
        if (libraryName === 'highlight.js') {
            return {
                ...config,
                strictVersion: false,
            };
        }
    },
};
