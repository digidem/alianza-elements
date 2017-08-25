const yo = require('yo-yo')

module.exports = function (props) {
  return yo`
    <button class="btn ${props.class}" onclick=${props.onclick}>${props.title}</button>
  `
}
