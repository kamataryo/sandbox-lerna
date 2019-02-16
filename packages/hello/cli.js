#!/usr/bin/env node
const hello = require('./index.js')
const name = process.argv[2]

hello(name)
