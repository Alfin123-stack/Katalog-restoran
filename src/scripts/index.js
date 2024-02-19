import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import hamburger from './event/hamburger.js'
import cardResto from './component/card-resto.js'
import foodResto from './component/food-resto.js'

foodResto()
hamburger()
cardResto()
console.log('Hello Coders! :)')
