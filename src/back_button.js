const yo = require('yo-yo')
var button = require('./button')

module.exports = BackButton

function BackButton (map, opts, onclick) {
  if (!(this instanceof BackButton)) return new BackButton(map, opts, onclick)
  if (typeof opts === 'function') {
    onclick = opts
    opts = {}
  }
  this.onclick = onclick
  this.map = map
  this.stop = opts.stop || 10
  this.language = opts.language || 'es'
  this.redraw.bind(this)
  this.el = this._getElement()
  document.body.appendChild(this.el)
  this.map.on('zoom', this.redraw.bind(this))
  this.redraw()
}

BackButton.prototype.update = function () {
  yo.update(this.el, this._getElement())
  this.redraw()
}

BackButton.prototype.redraw = function () {
  if (this.map.getZoom() > this.stop) this.el.style.display = ''
  else this.el.style.display = 'none'
}

BackButton.prototype._getElement = function () {
  var self = this
  var translations = {
    'es': 'VER MAPA COMPLETO',
    'en': 'SEE FULL MAP'
  }
  var backButton = button({
    title: translations[self.lang],
    onclick: self.onclick
  })
  backButton.style.filter = 'alpha(opacity=0.8)'
  backButton.style.position = 'absolute'
  backButton.style.right = '0'
  backButton.style.top = '0px'
  backButton.style.margin = '10px'
  return backButton
}
