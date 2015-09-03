'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider
const Server = require('../src/Server')

class ServerProvider extends ServiceProvider {

  static get inject(){
    return ["Adonis/Src/Route","Adonis/Src/Request","Adonis/Src/Response","Adonis/Src/Logger"]
  }

  * register () {
    this.app.bind('Adonis/Src/Server', function (Route,Request,Response,Logger) {
      return new Server(Route,Request,Response,Logger)
    })
  }
}

module.exports = ServerProvider
