const xtend = require('xtend')
const yo = require('yo-yo')
const css = require('sheetify')
const mapboxgl = require('mapbox-gl')

module.exports = Popup

function Popup (map, opts) {
  if (!(this instanceof Popup)) return new Popup(map, opts)
  this.map = map
  this.popup = new mapboxgl.Popup(xtend({
    closeButton: true,
    closeOnClick: false
  }, opts))

  var styles = css`

    html .mapboxgl-popup-tip {
      opacity: 0;
    }

    html .mapboxgl-popup-content {
      padding: 0;
    }


    html .mapboxgl-popup-close-button {
      color: white;
      z-index: 99;
      right: -4.5px;
      top: -13.5px;
      width: 5px;
      height: 13px;
      margin-left: 0px;
      font-size: 18px;
    }
    html .mapboxgl-popup-close-button:hover {
      background-color: transparent;
      color: #eee;
      border-color: #eee;
    }
    html .mapboxgl-popup-close-button:hover:before {
      background-color: rgba(0,0,0,0.9);
    }
    html .mapboxgl-popup-close-button:before {
      content: '';
      position: absolute;
      background-color: rgba(0,0,0,0.8);
      border-radius: 10px;
      border: 2px solid white;
      width: 100%;
      height: 100%;
      left: 1.5px;
      top: 3px;
      z-index: -1;
    }
  `

  this.popupNode = yo`<div class=${styles}></div>`
  this.popup.setDOMContent(this.popupNode)

  // Clear previous IMG before updating to new image
  // Avoids initial load of previous popup image before new image loads
  this.yoOptions = {
    onBeforeElUpdated: function (fromEl) {
      if (fromEl.tagName.toUpperCase() === 'IMG') {
        fromEl.src = ''
      }
    }
  }
}

Popup.prototype.update = function (dom) {
  yo.update(this.popupNode, dom, this.yoOptions)
}

Popup.prototype.remove = function () {
  this.popup.remove()
}

Popup.prototype.setLngLat = function (lngLat) {
  this.popup.setLngLat(lngLat).addTo(this.map)
}
