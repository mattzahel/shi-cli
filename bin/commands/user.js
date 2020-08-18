const os = require('os')
const logData = require('../utilities/logData')

const userData = {
  'Username': os.userInfo().username,
  'Home directory': os.userInfo().homedir,
  'Shell': os.userInfo().shell,
  'uid': os.userInfo().uid,
  'gid': os.userInfo().gid,
}

const user = () => {
  logData(userData)
}

module.exports = {
  user,
  userData,
}
