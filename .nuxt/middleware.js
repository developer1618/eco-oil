const middleware = {}

middleware['admin'] = require('..\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['partner'] = require('..\\middleware\\partner.js')
middleware['partner'] = middleware['partner'].default || middleware['partner']

export default middleware
