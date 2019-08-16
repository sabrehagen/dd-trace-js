'use strict'

const execSync = require('child_process').execSync
const normalizeTestConfigs = require('../../../scripts/helpers/normalizeTestConfigs')

const defaults = {
  integration: 'promise',
  repo: 'https://github.com/then/promise',
  setup: function (cwd) {
    execSync('npm install && npm build', { cwd })
  }
}

const testConfigs = [
  {
    framework: 'mocha',
    args: '--timeout 200 --slow 99999 "test/**/*"'
  },
  {
    name: 'promise (master) - memory leak test',
    framework: 'node',
    args: '--expose-gc test/memory-leak.js'
  }
]

module.exports = normalizeTestConfigs(testConfigs, defaults)
