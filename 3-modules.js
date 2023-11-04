// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

names = require('./4-names')
sayHi = require('./5-utils')

// Here, the function call inside the module is going to be executed
require('./7-module-is-executed')


sayHi('alice')
sayHi(names.tomas)
sayHi(names.jakub)
