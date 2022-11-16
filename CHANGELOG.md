# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `simple-import-sort/imports`
- `browser` environment
- `no-unused-vars` args after-used
- `no-cond-assign`. Previously disabled in `eslint-config-google`
- `'quote-props': ['error', 'as-needed']`
- `yarn.lock`

### Changed
- Removed `eslint-config-google`. Inlined rules
- Removed `babel-eslint`
- Removed multiple globals

## v2.0.1
### Added
- Warn on use of `console`
