const nodeIO = require('./nodeIO')
const os = require('os')

const cpuInfo = os.cpus()
console.log(os.totalmem()/1014/1024/1024 )
nodeIO.fileWrite('./nodeIO/cpuInfo.txt', JSON.stringify(cpuInfo))

