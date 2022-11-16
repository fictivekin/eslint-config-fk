# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `simple-import-sort/imports`. #6
- `browser` environment. #9
- `no-unused-vars` args after-used. #2
- `no-cond-assign`. Previously disabled in `eslint-config-google`
- `'quote-props': ['error', 'as-needed']`. #12
- `yarn.lock`

### Changed
- Removed `eslint-config-google`. Inlined rules. #8
- Removed `babel-eslint`. #3, #7
- Removed multiple globals. #9

## v2.0.1
### Added
- Warn on use of `console`
