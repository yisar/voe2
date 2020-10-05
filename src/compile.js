import {parse} from './parse'
import {generate} from './generate'

export const compile = (elment,input) =>{
    let ast = parse(input)
    let fragment = generate(ast) 
    return `
    ${fragment}
    export default Component.bind(null, fragment)
    `
}