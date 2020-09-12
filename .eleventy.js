module.exports = function(eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  // eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({'src/admin': 'admin'});
  eleventyConfig.addPassthroughCopy({'src/css': 'css'});
  eleventyConfig.addPassthroughCopy({'src/images': 'images'});
  eleventyConfig.addPassthroughCopy({'src/scripts': 'scripts'});
  eleventyConfig.addPassthroughCopy({'src/favicon.ico': 'favicon.ico'});

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  const { DateTime } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

};