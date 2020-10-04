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
            this.lifecycle = ${code};
        }
        connectedCallback(){
            ${this.lifecycle[0]}
        }
        disconnectedCallback(){
            ${this.lifecycle[2]}
        }
    }
    `
}