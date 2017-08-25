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
    :host input[type="radio"] {
      display: none;
    }
    :host input[type="radio"] {
      display: none;
    }
    :host .btn.active {
      background: white;
    }
    :host .btn {
      font-size: 14px;
      font-family: sans-serif;
      text-transform: uppercase;
      font-weight: bold;
    }
  `

  var el = yo`<div class=${style}>
    <div class="btn-group" data-toggle="buttons">
      <label class="btn ${lang === 'es' ? 'active' : ''}">
        <input type="radio" onclick=${handleClick} checked="${lang === 'es'}" name="language" id="es" autocomplete="off" />
        Español
      </label>
      <label class="btn ${lang === 'en' ? 'active' : ''}">
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
