# color-art
This is a Javascript Library which is a wraper around [**Color**](https://github.com/Qix-/color). 
This library enhances the Color library to lighten and darken a given color to any extent based on the props passed.

## 📖 Getting started

`$ yarn add color-art`

# 💻 Usage
import colorArt from 'color-art'

colorArt('red','light*')

Purpose of this library is to lighten or darken a given color.

We have a color factor of 0.23 to lighten the color and 0.14 to darken it.

Example: If we pass light* as colorShade Prop then we will lighten the given color by 0.23 * 1. Similarly if we have dark** then we will darken it by 0.14*2

The * over here determines the level with which we are willing to increase the light or dark factor


## 💡 Props

- **General**

| Prop                   | Type                | Default | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| `color: mandatory`     | `string`            |         | Specify the color you want to edit                 |
| `colorShade`                | `string`            |         | Specify the shade you want 'light' , 'dark', 'light*', 'dark*'.
           

## ✨ Credits
- Color: [**color**](https://github.com/Qix-/color)  
