'use strict'

const path = require('path')
const execSync = require('../../../../../scripts/helpers/exec')

function executeNode (args, options) {
  const tracerSetupPath = path.join(__dirname, '..', 'tracer-setup.js')
  const npmRunEnv = 'npm run env --silent --'

  // Inject our tracer before we run the external tests
  try {
    return execSync(`${npmRunEnv} node -r '${tracerSetupPath}' ${args}`, options)
  } catch (err) {} // eslint-disable-line no-empty
}

module.exports = executeNode
