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

### Quiet warnings with --quiet

Add the `--quiet` option to suppress warnings and show only errors.

``` sh
# yarn
yarn lint:js --quiet

# npm
npm run lint:js -- --quiet
```

### JSDoc

Writing JSDocs for functions can feel like a chore, but we've eased on some rules to make it easier. Parameter descriptions and return descriptions are not required. If your variable names are self-documenting, you can omit descriptions and document just the types.

``` js
/**
 * @param {Object} post
 * @param {String} attr
 * @return {String}
 */
function getTitle(post, attr) {
  return post[attr]; // contrived example, but you get the idea
}
```

### no-used-vars error in destructured Array

You may encounter this error:

```
error  'key' is defined but never used  no-unused-vars
```

The linter is likely catching an unused argument variable within a destructured Array. Prefix the argument with an underscore `_` to make the linter ignore it. See [no-unused-vars destructuredArrayIgnorePattern](https://eslint.org/docs/latest/rules/no-unused-vars#destructuredarrayignorepattern).

``` js
Object.entries(items, (_key, value) => {})
```
