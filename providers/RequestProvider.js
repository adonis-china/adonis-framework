'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider
const Request = require('../src/Request')

class RequestProvider extends ServiceProvider {

  * register () {
    this.app.bind('Adonis/Src/Request', function () {
      return Request
    })
  }
}

module.exports = RequestProvider
