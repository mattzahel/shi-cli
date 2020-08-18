const os = require('os')
const chalk = require('chalk')

const userData = {
  'Username': os.userInfo().username,
  'Home directory': os.userInfo().homedir,
  'Shell': os.userInfo().shell,
  'uid': os.userInfo().uid,
  'gid': os.userInfo().gid,
}

const user = () => {
  Object.entries(userData).forEach((el) => {
    console.info(chalk`{blue ${(el[0].padEnd(15))}} ${el[1]}`)
  })
}

module.exports = {
  user,
  userData,
}
