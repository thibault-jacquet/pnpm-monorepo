const base = require('../../../../jest.base.config')
const packageJson = require('./package')

module.exports = {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name
}
