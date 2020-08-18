const chalk = require('chalk')

const logData = (...arrays) => {
  let data = []
  data = Object.assign(data, ...arrays)
  Object.entries(data).forEach((el) => {
    console.info(chalk`{blue ${(el[0].padEnd(15))}} ${el[1]}`)
  })
}

module.exports = logData
