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

### `style.css`

Get some basic global styles for alianza maps.

```js
var css = require('sheetify')
css('alianza-elements/style.css')
```

### `backButton([lang], onclick)`

A button that returns to the full map view. Will be visible above the `stop` zoom. `lang` defaults to `es`.

```js
var button = elements.backButton(map, {lang: 'es', stop: 11.93}, function () {
  map.fitBounds(...)
})
```

Updating button language uses the `update` function

```
button.language = 'en'
button.update()
```

### `Popup(map)`

A base popup that uses `yo` under the hood. `update` takes an HTML element and updates the dom for the popup.

```js
var popup = elements.Popup(map)
popup.update(HTMLElement)
popup.setLngLat(lngLat)
popup.remove()
```


### `Language(updateLang, lang)`

* `updateLang`: a function that fires when button clicked, with the chosen language as a parameter. 
* `lang`: the current language (`es` or `en`).

```js
var languageControl = elements.language(updateLang, lang)
document.body.appendChild(languageControl)
```

