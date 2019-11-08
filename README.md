# HashiCorp DatoCMS Typings

This repo serves one purpose: to always contain, at `index.d.ts`, an up to date file with typings for all of our DatoCMS models in our primary Dato instance.

### Usage

Install this package with `npm i hashicorp/dato-types`, then add its location to the `typeRoots` config in your `tsconfig.json` file, as such:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": ["node_modules/@types", "node_modules/@hashicorp/dato-types"]
  }
}
```

Now you should be able to require typings directly from this package, as such:

```jsx
import { ButtonRecord } from '@hashicorp/dato-types'
```

> **NOTE**: The installation command is `hashicorp/dato-types` without an `@` on purpose, as this package is intended to be installed directly from github. When requiring it internally however, use `@hashicorp/dato-types` as this is the npm package name.

### Updating

Each time DatoCMS changes are made, a script will trigger to cause this repo to update its types. If you made a change in DatoCMS and would like for it to be reflected in your local project, just run `npm i` again and it will update to the latest version. The key here is that the installation references the github repo, so its not an npm module nor does it use semver.
