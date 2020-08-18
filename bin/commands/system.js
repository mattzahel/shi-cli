const os = require('os')
const logData = require('../utilities/logData')
const formatTime = require('../utilities/formatTime')

const systemData = {
  'Hostname': os.hostname(),
  'Uptime': formatTime(os.uptime()),
  'Platform': os.platform(),
  'Release': os.release(),
  'Type': os.type(),
  'Architecture': os.arch(),
}

const system = () => {
  logData(systemData)
}

module.exports = {
  system,
  systemData,
}
