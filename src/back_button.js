var button = require('./button')

module.exports = backButton

function backButton (lang, onclick) {
  if (!onclick && typeof lang === 'function') return button('es', lang)
  var translations = {
    'es': 'VER MAPA COMPLETO',
    'en': 'SEE FULL MAP'
  }
  var backButton = button({
    title: translations[lang],
    onclick: onclick
  })
  backButton.style.filter = 'alpha(opacity=0.8)'
  backButton.style.display = 'none'
  backButton.style.position = 'absolute'
  backButton.style.right = '0'
  backButton.style.top = '35px'
  backButton.style.margin = '20px'
  return backButton
}
