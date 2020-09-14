module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        'index.html',
        'resume.html',
        'src/**/*.html',
        'src/scripts/*.js',
        '_includes/**/*.njk',
        'portfolio/**/*.md',
        'posts/**/*.md'
      ],
      defaultExtractor: content => content.match(/[A-za-z0-9-_:/]+/g)
    })
  ],
};