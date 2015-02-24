module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'css/cleancss/tidy.css',
    dest: 'css/build/prefixed/'
  }
}