# Hell Court Website

## Information

This is a development blog for Hell Court. The website is currently *under construction*.

The website is hosted here at Github and using a domain [hellcourtgame.com/](http://hellcourtgame.com/). It is using [Metalsmith](http://www.metalsmith.io/) generator to build the site.

## License

`posts` directory is Copyright 2015 Chuckeles. You may not reuse anything in there without my permission.

All other directories and files are MIT licensed (see the [LICENSE.md](https://github.com/chuckeles/hellcourtgame.com/blob/master/LICENSE.md) file)

## Building

To build the site, install dependencies and run `build.js`:

```sh
npm install
node --harmony_generators build.js
```

## Publishing

Metalsmith builds the website to the `build` folder. In order to push this folder to the `gh-pages` branch, I use this:

```sh
git subtree push --prefix build origin gh-pages
```
