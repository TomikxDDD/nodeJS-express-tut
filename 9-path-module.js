const path = require('path')

console.log("Default system separator: ", path.sep)

const joinedPath = path.join('/folder', 'subfolder', 'test')

console.log('Joined path: ', joinedPath)

const base = path.basename(joinedPath)

console.log('Base name: ', base)

const absolutePath = path.resolve('folder', 'subfolder', 'test.txt')

console.log("Absolute path: ", absolutePath)

console.log("File extension: ", path.extname(absolutePath))