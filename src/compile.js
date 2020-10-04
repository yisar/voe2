import {parse} from './parse'
import {generate} from './generate'

export const compile = (elment,input) =>{
    let ast = parse(input)
    let code = generate(ast) 
    return `
      export default class extends HtmlElement {
        constructor() {
            let template = document.createElement('template')
            template.innerHTML = ${input}
            this.attachShadow({
              mode: 'open',
            }).appendChild(template.content.cloneNode(true))
            super();
        }
        connectedCallback(){
            ${code[0]}
        }
        disconnectedCallback(){
            ${code[2]}
        }
    }
    `
}