const yo = require('yo-yo')
var button = require('./button')

module.exports = backButton

function backButton (map, opts, onclick) {
  if (!(this instanceof backButton)) return new backButton(map, opts, onclick)
  if (typeof opts === 'function') {
    onclick = opts
    opts = {}
  }
  this.onclick = onclick
  this.map = map
  this.stop = opts.stop || 10
  this.lang = opts.lang || 'es'
  this.redraw.bind(this)
  this.el = this._getElement()
  document.body.appendChild(this.el)
  this.map.on('zoom', this.redraw.bind(this))
  this.redraw()
}

backButton.prototype.redraw = function () {
  if (this.map.getZoom() > this.stop) this.el.style.display = ''
  else this.el.style.display = 'none'
}

backButton.prototype._getElement = function () {
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
  backButton.style.top = '40px'
  backButton.style.margin = '20px'
  return backButton
}

backButton.prototype.updateLang = function (lang) {
  this.lang = lang
  yo.update(this.el, this._getElement())
  this.redraw()
}
