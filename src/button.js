const yo = require('yo-yo')

module.exports = function (props) {
  return yo`
    <button class="${props.class}" onclick=${props.onclick}>${props.title}</button>
  `
}
