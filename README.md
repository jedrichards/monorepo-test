# monorepo-test

This is a monorepo containing three packages, a CRA app, a Gatsby app and a shared component library.

In this monorepo both apps import and render a shared component styled with `emotion`, which seems to be working.

This sort of setup is, if not naive, then a rough and ready approach to component sharing in a monorepo whereby the shared components aren't versioned or published to npm. The apps simply depend on the latest version of the shared components in the repo, as such the apps and shared components are thought of as a unit and are likely deployed together as a group.

## CRA

The CRA version is using `react-scripts@2.0.0-next.3e165448` which recently enabled monorepo support, that is, it will treat monorepo packages as source and compile them according to CRA's Babel config. More info here:

https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#sharing-components-in-a-monorepo

## Gatsby

Gatsby also seems to be compiling the shared component as source, which was surprising. Is this expected behaviour, or documented anywhere?

## Further reading

- CRA RFC to define a `sourceDependencies` field to `package.json`, this would help tools like CRA to determine which dependencies require compilation https://github.com/facebook/create-react-app/issues/4092
- Parcel RFC to define a `source` boolean field could indicate the a package should be treated as source on a per package basis https://github.com/parcel-bundler/parcel/pull/1101