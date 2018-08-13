module.exports = {
  linters: {
    '**/*.+(js|css|scss|json)': ['prettier --write', 'eslint --fix', 'git add']
  }
}
