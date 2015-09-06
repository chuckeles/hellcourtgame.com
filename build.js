// dependencies
var metalsmith = require("metalsmith");

var branch = require("metalsmith-branch");
var copy = require("metalsmith-static");
var layouts = require("metalsmith-layouts");
var markdown = require("metalsmith-markdown");

// setup
metalsmith(__dirname)

  // directories
  .source("posts")
  .destination("build")

  // meta files
  .use(copy({
    src: "meta",
    dest: "."
  }))

  // markdown
  .use(branch("*.md")
    .use(markdown())
  )

  // handlebars
  .use(branch("*.html")
    .use(layouts({
      engine: "handlebars",
      partials: "includes",
      layouts: "layouts",
      default: "post.html"
    }))
  )

  // build
  .build(function(err){
    if (err) throw err;

    console.log("Successfully built the website");
  });
