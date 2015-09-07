// dependencies
var harmonize  = require("harmonize")(["harmony-generators"]);
var metalsmith = require("metalsmith");
var cheerio      = require("cheerio");

var assets       = require("metalsmith-assets");
var autoprefixer = require("metalsmith-autoprefixer");
var branch       = require("metalsmith-branch");
var cleanCss     = require("metalsmith-clean-css");
var collections  = require("metalsmith-collections");
var concat       = require("metalsmith-concat");
var date         = require("metalsmith-date-in-filename");
var feed         = require("metalsmith-feed");
var fingerprint  = require("metalsmith-fingerprint");
var handlebars   = require("metalsmith-in-place");
var ignore       = require("metalsmith-ignore");
var layouts      = require("metalsmith-layouts");
var markdown     = require("metalsmith-markdown");
var minify       = require("metalsmith-html-minifier");
var permalinks   = require("metalsmith-permalinks");
var sitemap      = require("metalsmith-sitemap");

// setup
metalsmith(__dirname)

  // directories
  .source("source")
  .destination("build")

  // metadata
  .metadata({
    site: {
      title: "Hell Court Development Blog",
      description: "Development blog for Hell Court",
      url: "http://hellcourtgame.com"
    }
  })

  // fonts
  .use(assets({
    source: "fonts",
    destination: "fonts"
  }))

  // css
  .use(assets({
    source: "css",
    destination: "css"
  }))
  .use(branch("**/*.css")
    .use(autoprefixer())
    .use(concat({
      files: "**/*.css",
      output: "css/style.min.css"
    }))
    .use(cleanCss())
    .use(fingerprint({
      pattern: "css/style.min.css"
    }))
  )

  // markdown
  .use(markdown({
    gfm: true,
    smartypants: true
  }))

  // html
  .use(branch("**/*.html")

    // date
    .use(date(true))

    // format date
    .use(function (files, metalsmith, done) {
      // iterate files
      Object.keys(files).forEach(function (name) {
        var file = files[name];
        if (file.date) {
          // add formatted date
          file.dateString =
            file.date.getDate() + ". " +
            (file.date.getMonth() + 1) + ". " +
            file.date.getFullYear();
        }
      });

      // done
      done();
    })

    // permalinks
    .use(permalinks({
      pattern: "blog/:link"
    }))

    // collections
    .use(branch(function (name, file) {
      return file.link;
    })
      .use(collections({
        posts: {
          pattern: "**/*.html",
          sortBy: "date",
          reverse: true
        }
      }))
    )

    // handlebars
    .use(handlebars({
      engine: "handlebars",
      partials: "includes"
    }))
    .use(layouts({
      engine: "handlebars",
      partials: "includes",
      layouts: "layouts",
      pattern: "**/*.html",
      default: "post.html"
    }))

    // minify
    .use(minify())

    // excerpts
    .use(function (files, metalsmith, done) {
      // iterate files
      Object.keys(files).forEach(function (name) {
        var file = files[name];

        // check link
        if (file.link) {
          // load content
          var $ = cheerio.load(file.contents.toString());

          // grab second p
          var p = $("p")[1];

          // set excerpt
          file.excerpt = $.html(p).trim();
        }
      });

      // done
      done();
    })

    // sitemap url
    .use(function (files, metalsmith, done) {
      // iterate files
      Object.keys(files).forEach(function (name) {
        var file = files[name];

        // check link
        if (file.link) {
          // set sitemap url
          file.sitemapUrl = "/blog/" + file.link;
        }
        else {
          // generate by file name
          if (name === "index.html")
            file.sitemapUrl = "/";
          else
            file.sitemapUrl = "/" + name;
        }
      });

      // done
      done();
    })

    // sitemap
    .use(sitemap({
      hostname: "http://hellcourtgame.com",
      urlProperty: "sitemapUrl"
    }))

    // feed
    .use(feed({
      collection: "posts"
    }))

  )

  // meta files
  .use(assets({
    source: "meta",
    destination: "."
  }))

  // build
  .build(function(err){
    if (err) throw err;

    console.log("Success");
  });
