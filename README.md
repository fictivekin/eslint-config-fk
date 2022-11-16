# eslint-config-fk
Fictive Kin sharable eslint configuration

## Usage

Run the following in your project directory to install:

```
yarn add eslint @fictivekin/eslint-config-fk --dev
```

In your package.json file, add:

```
"eslintConfig": {
    "extends": "@fictivekin/eslint-config-fk"
}
```

## Development

Use the `dev` branch for on-going development. Merge PRs against `dev`.

`master` branch is for the latest production release.

We need to be careful with changes to our lint config, as our linting rules directly affect project workflows, possibly breaking builds when new errors are introduced. Every so often, we will evaluate the changes to `dev` and cut a new release. Changes that introduce new errors are considered a breaking change and will constitute a new major version. So, we want to batch those changes together in bigger releases, rather that smaller incremental releases.

## Notes

### no-used-vars error in destructured Array

You may encounter this error:

```
error  'key' is defined but never used  no-unused-vars
```

The linter is likely catching an unused argument variable within a destructured Array. Prefix the argument with an underscore `_` to make the linter ignore it. See [no-unused-vars destructuredArrayIgnorePattern](https://eslint.org/docs/latest/rules/no-unused-vars#destructuredarrayignorepattern).

``` js
Object.entries(items, (_key, value) => {})
```
