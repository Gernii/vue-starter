import daisyui from 'daisyui'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import daisyTheme from 'daisyui/src/theming/themes'
import animated from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,vue}'],
  theme: {
    extend: {},
  },
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...daisyTheme['winter'],
          primary: 'oklch(78.83% 0.1307 177.39)',
        },
      },
      ,
      {
        dark: {
          ...daisyTheme['dark'],
          primary: 'oklch(78.83% 0.1307 177.39)',
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },

  plugins: [aspectRatio, typography, animated, daisyui],
}
