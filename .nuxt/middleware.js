const middleware = {}

middleware['delay'] = require('../middleware/delay.js')
middleware['delay'] = middleware['delay'].default || middleware['delay']

middleware['pages'] = require('../middleware/pages.js')
middleware['pages'] = middleware['pages'].default || middleware['pages']

export default middleware
