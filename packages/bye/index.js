const chalk = require('chalk')

module.exports = name => {
  console.log('Goodbye, ' + chalk.yellow(name) + '!')
}
