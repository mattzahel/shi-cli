const os = require('os')
const table = require('text-table')

const userData = {
  'Username': os.userInfo().username,
  'Home directory': os.userInfo().homedir,
  'Shell': os.userInfo().shell,
  'uid': os.userInfo().uid,
  'gid': os.userInfo().gid,
}

const user = () => {
  console.log(Object.entries(userData)) // array of arrays
  const t = table(
    Object.entries(userData),
  )
  console.info(t)
}

module.exports = {
  user,
  userData,
}
