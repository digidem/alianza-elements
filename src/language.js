var yo = require('yo-yo')
const css = require('sheetify')

module.exports = function (updateLang, lang) {
  var style = css`
    :host {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    :host > .btn:not(.active):not(:hover) {
      background-color: #fff;
    }
    :host > .btn:hover {
      cursor: pointer;
    }
  `

  var el = yo`<div class=${style}>
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-outline-primary ${lang === 'es' ? 'active' : ''}">
        <input type="radio" onclick=${handleClick} checked="${lang === 'es'}" name="language" id="es" autocomplete="off" />
        Español
      </label>
      <label class="btn btn-outline-primary ${lang === 'en' ? 'active' : ''}">
        <input type="radio" onclick=${handleClick} checked="${lang === 'en'}" name="language" id="en" autocomplete="off" />
        English
      </label>
    </div>
  </div>`

  function handleClick (e) {
    e.stopPropagation()
    var checked = el.querySelector('input[type=radio]:checked')
    var unChecked = el.querySelector('input[type=radio]:not(:checked)')
    checked.parentNode.classList.add('active')
    unChecked.parentNode.classList.remove('active')
    updateLang(checked.id)
  }

  return el
}
