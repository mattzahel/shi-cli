const formatBytes = (bytes = 0, withGb) => {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10),
    sizes.length - (!withGb ? 2 : 1))

  return `${(bytes / (1024 ** i)).toFixed(i ? 1 : 0)} ${sizes[i]}`
}

module.exports = formatBytes
