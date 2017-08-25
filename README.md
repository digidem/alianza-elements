# alianza-elements

Shared UI elements for the alianza-ceibo maps

```
npm install alianza-elements --save
```

## Usage

```
var elements = require('alianza-elements')
```

## API


### `backButton([lang], onclick)`

A button that returns to the full map view. `lang` defaults to `es`.

```
var button = elements.backButton(lang, function () {
  map.fitBounds(...)
})
document.body.appendChild(button)
```

### `Popup(map)`

A base popup that uses `yo` under the hood. `update` takes an HTML element and updates the dom for the popup.

```
var popup = elements.Popup(map)
popup.update(HTMLElement)
popup.setLngLat(lngLat)
popup.remove()
```

