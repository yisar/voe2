import {parse} from '../src/parse.js'
const html = `<button>hello{msg}</button>`
console.log(parse(html))