#!/usr/bin/env node
const hello = require('../hello/index.js')
const bye = require('../bye/index.js')
const name = process.argv[2]

hello(name)
bye(name)
