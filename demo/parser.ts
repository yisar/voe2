import {parse} from '../src/parser'

const html = `<button>hello {nama}</button>`

console.log(parse(html))