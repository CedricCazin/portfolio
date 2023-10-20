const {
    utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

// prettier-ignore
const types = [
    { value: 'release-major',   name: 'release-major:   (major) Create a release commit' },

    { value: 'feat',            name: 'feat:            (minor) A new feature' },
    { value: 'deps',            name: 'deps:            (minor) anything related to dependencies' },
    { value: 'release-minor',   name: 'release-minor:   (minor) Create a release commit' },
    
    { value: 'fix',             name: 'fix:             (patch) A bug fix' },
    { value: 'perf',            name: 'perf:            (patch) A code change that improves performance' },
    { value: 'refactor',        name: 'refactor:        (patch) A code change that neither fixes a bug or adds a feature' },
    { value: 'style',           name: 'style:           (patch) Markup, white-space, formatting, missing semi-colons...' },
    { value: 'revert',          name: 'revert:          (patch) Reverts a previous commit' },
    { value: 'release-patch',   name: 'release-patch:   (patch) Create a release commit' },

    { value: 'chore',           name: 'chore:           (none) Build process or auxiliary tool changes' },
    { value: 'docs',            name: 'docs:            (none) Documentation only changes' },
    { value: 'test',            name: 'test:            (none) Adding missing tests' },
    { value: 'lint',            name: 'lint:            (none) Lint fixes' },
    { value: 'config',          name: 'config:          (none) anything related to configuration' },
    { value: 'wip',             name: 'wip:             (none) Work in progress' },
];

// prettier-ignore
const scopes = [
    { value: 'ci',              name: 'ci:              anything ci specific' },
    { value: 'deploy',          name: 'deploy:          anything deployment specific' },
    { value: 'repo',            name: 'repo:            anything related to managing the repo itself'},
    { value: 'tools',           name: 'tools:           anything related to tools'},
    // nx projects will be added in the cli
];

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
    // commitlint options
    extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
    ignores: [(message) => message.includes('WIP'), (message) => message.includes('[skip ci]')],
    utils: { getProjects },
    rules: {
        'type-enum': [2, 'always', Object.values(types).map((s) => s.value)],
        'scope-empty': [2, 'never'],
        'scope-enum': (ctx) =>
            getProjects(ctx).then((packages) => [1, 'always', ['all', ...scopes.map((s) => s.value), packages]]),
    },

    // cz-git, czg options
    types,
    enableMultipleScopes: true,
    allowCustomScopes: true,
    allowEmptyScopes: false,
    scopes: (ctx) => getProjects(ctx).then((packages) => [...scopes, ...packages]),
};
