import {parse} from '../src/parser.js'
const html = `<button>hello{msg}</button>`
console.log(parse(html))