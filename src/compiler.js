const compile = (root, reference) => {
    let children = root.children
    let create = ''
    let update = ''
    let remove = ''

    for (let i = 0; i < children.length; i++) {
        let generated = compileAll(children[i], root, root, reference)
        create += generated[0]
        update += generated[1]
        remove += generated[2]
    }

    return `[()=>{${create}},()=>{${update}},()=>{${remove}}]`
}

const compileAll = (element,parent,root,reference)=>{
    switch (element.type){
        case 'text':{
            let attribute = element.attributes[0]
            let elment = root.next++
            let code = set
        }
    }
}