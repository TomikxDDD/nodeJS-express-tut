const path = require('path')
const { readFile, writeFile } = require('fs')
const pathToFiles = path.resolve('folder')

let first, second

readFile(path.join(pathToFiles, 'first.txt'), (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  first = result
  readFile(path.join(pathToFiles, 'second.txt'), (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    second = result
    writeFile(path.join(pathToFiles, 'result-async.txt'), `The resulting text: \nFirst: ${first} \nSecond:${second}`, 'utf-8', (err, result) => {
      if (err) {
        console.log(err);
        return
      }
      console.log("Result: ", result)
    })
  })
})