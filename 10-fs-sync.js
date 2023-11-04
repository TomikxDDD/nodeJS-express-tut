const path = require('path')
const { readFileSync, writeFileSync } = require('fs')

const pathToFiles = path.resolve('folder')
const first = readFileSync(path.join(pathToFiles, 'first.txt'), { encoding: 'utf-8' })
const second = readFileSync(path.join(pathToFiles, 'second.txt'))

writeFileSync(path.join(pathToFiles, 'result-sync.txt'), `The resulting text: \nFirst: ${first} \nSecond:${second}`, { flag: 'w', encoding: 'utf-8' })