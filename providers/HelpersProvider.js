'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider

class HelpersProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Src/Helpers', function () {
      return require('../src/Helpers')
    })
  }
}

module.exports = HelpersProvider
