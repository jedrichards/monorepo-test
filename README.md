# monorepo-test

This is a Yarn workspaces monorepo containing two packages, a Gatsby app and a shared component library.

To test

1. Run `yarn` in the monorepo root
2. `cd gatsby-app`
3. `yarn run develop`

Observe the shared component being imported and rendered properly on Gatsby's index page.

The Gatsby app is unchanged from the version dervied from `gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-default`, aside from adding the following to its package.json:

- `private: true`
- `"workspaces": { "nohoist": ["gatsby"] }`