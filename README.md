# Hell Court Website

## Status

[![Code Climate](https://img.shields.io/codeclimate/github/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://codeclimate.com/github/chuckeles/hellcourtgame.com)
[![VersionEye](https://img.shields.io/versioneye/d/user/projects/55f07d031e87ad001400044e.svg?style=flat-square)](https://www.versioneye.com/user/projects/55f07d031e87ad001400044e)
[![GitHub Release](https://img.shields.io/github/release/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://github.com/chuckeles/hellcourtgame.com/releases/latest)
[![GitHub Issues](https://img.shields.io/github/issues/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://github.com/chuckeles/hellcourtgame.com/issues)

## Information

This is a development blog for Hell Court. The website is currently *under construction*.

The website is hosted here at Github and using a domain [hellcourtgame.com](http://hellcourtgame.com/). It is using [Metalsmith](http://www.metalsmith.io/) generator to build the site.

## License

`posts` directory is Copyright 2015 Chuckeles. You may not reuse anything in there without my permission.

All other directories and files are MIT licensed (see the [LICENSE.md](https://github.com/chuckeles/hellcourtgame.com/blob/master/LICENSE.md) file)

## Building

To build the site, install dependencies and run `build.js`:

```sh
npm install
node build
```

## Publishing

Metalsmith builds the website to the `build` folder. In order to push this folder to the `gh-pages` branch, I use this:

```sh
git subtree push --prefix build origin gh-pages
```
