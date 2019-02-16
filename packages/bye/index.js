const chalk = require('chalk')

module.exports = name => {
  console.log('Hello, ' + chalk.cyan(name) + '!')
}
