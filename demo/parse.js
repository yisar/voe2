import {parse} from '../src/parse'
const html = `<button>hello {name}</button>`
console.log(parse(html))