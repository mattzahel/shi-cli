const os = require('os')
const logData = require('../utilities/logData')
const formatBytes = require('../utilities/formatBytes')

const fileSystemData = {
  'Home directory': os.homedir(),
  'Total memory': formatBytes(os.totalmem()),
  'Free memory': formatBytes(os.freemem()),
}

const fileSystem = () => {
  logData(fileSystemData)
}

module.exports = {
  fileSystem,
  fileSystemData,
}
