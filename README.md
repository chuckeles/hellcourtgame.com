# Hell Court Website

## Status

[![Travis](https://img.shields.io/travis/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://travis-ci.org/chuckeles/hellcourtgame.com)
[![Code Climate](https://img.shields.io/codeclimate/github/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://codeclimate.com/github/chuckeles/hellcourtgame.com)
[![VersionEye](https://img.shields.io/versioneye/d/user/projects/55f07d031e87ad001400044e.svg?style=flat-square)](https://www.versioneye.com/user/projects/55f07d031e87ad001400044e)
[![GitHub Release](https://img.shields.io/github/release/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://github.com/chuckeles/hellcourtgame.com/releases/latest)
[![GitHub Issues](https://img.shields.io/github/issues/chuckeles/hellcourtgame.com.svg?style=flat-square)](https://github.com/chuckeles/hellcourtgame.com/issues)

## Information

This is a development blog for Hell Court.

The website is hosted here at Github and using a domain [hellcourtgame.com](http://hellcourtgame.com/). It is using [Metalsmith](http://www.metalsmith.io/) generator to build the site.

More information is in these blog posts: [Website is Online](http://hellcourtgame.com/blog/website-is-online/) and [About Hell Court](http://hellcourtgame.com/blog/about-hell-court/).

## License

`source/posts` directory is Copyright 2015 Chuckeles. You may not reuse anything in there without my permission.

All other directories and files are MIT licensed (see the [LICENSE.md file](https://github.com/chuckeles/hellcourtgame.com/blob/master/LICENSE.md)).

## Travis

Travis CI is building and deploying the build website using commands from below. See [.travis.yml file](https://github.com/chuckeles/hellcourtgame.com/blob/master/.travis.yml) for more information.

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
