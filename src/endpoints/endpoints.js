const public = require('./public')
const private = require('./private')
const api = require('./api')

module.exports = function(app){
    public(app)
    // private(app)
    // api(app)
}