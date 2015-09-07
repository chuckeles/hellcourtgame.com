// dependencies
var harmonize  = require("harmonize")(["harmony-generators"]);
var metalsmith = require("metalsmith");

var assets       = require("metalsmith-assets");
var autoprefixer = require("metalsmith-autoprefixer");
var branch       = require("metalsmith-branch");
var cleanCss     = require("metalsmith-clean-css");
var concat       = require("metalsmith-concat");
var ignore       = require("metalsmith-ignore");
var layouts      = require("metalsmith-layouts");
var markdown     = require("metalsmith-markdown");
var minify       = require("metalsmith-html-minifier");
var permalinks   = require("metalsmith-permalinks");


// setup
metalsmith(__dirname)

  // directories
  .source("source")
  .destination("build")

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
  .use(autoprefixer())
  .use(concat({
    files: "**/*.css",
    output: "css/style.min.css"
  }))
  .use(cleanCss())

  // markdown
  .use(markdown({
    gfm: true,
    smartypants: true
  }))

  // html
  .use(layouts({
    engine: "handlebars",
    partials: "includes",
    layouts: "layouts",
    pattern: "**/*.html",
    default: "post.html"
  }))
  .use(minify())

  // permalinks
  .use(permalinks({
    pattern: "blog/:link"
  }))

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
