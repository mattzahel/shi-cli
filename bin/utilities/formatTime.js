const formatTime = (timestamp) => {
  const hours = Math.floor(timestamp / 3600)
  const mins = Math.floor(timestamp / 60 - hours * 60)

  return `${hours} hours ${mins} minutes`
}

module.exports = formatTime
