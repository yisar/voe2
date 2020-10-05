import {parse,generate} from '../src/index'
const html = `<button>hello {name}</button>`
const ast = parse(html)
console.log(generate(ast))