let Color = require('color')

let lightColorFactor = 0.23
let darkColorFactor = 0.14
let light = 'light'
let dark = 'dark'

function ColorArt (color, colorShade) {
  if (colorShade === undefined || colorShade === null) {
    return color
  }

  let lightFactor, darkFactor, newColor
  if (colorShade.includes(light)) {
    colorShade = colorShade.replace(light, '')
    colorShade.length === 0
      ? (lightFactor = lightColorFactor)
      : (lightFactor = lightColorFactor * (colorShade.length + 1))
  } else if (colorShade.includes(dark)) {
    colorShade = colorShade.replace(dark, '')
    colorShade.length === 0
      ? (darkFactor = darkColorFactor)
      : (darkFactor = darkColorFactor * (colorShade.length + 1))
  }

  if (lightFactor !== undefined && lightFactor !== null) {
    newColor = Color(color).lighten(lightFactor).hex()
  } else if (darkFactor !== undefined && darkFactor !== null) {
    newColor = Color(color).darken(darkFactor).hex()
  }

  return newColor
}

module.exports = ColorArt
