# homo

Tiny web component compiler without runtime.

```html
<script>
  let name = "132";

  function rename() {
    name = "yse";
  }
</script>

<button onclick="{rename}">{name}</button>
```

This will compile to

```js
import {init, element, text, append, listen, Component } from '@homo/runtime'


function ctx(invalidate) {
	let name = 132

	function rename() {
        name = 'yse'
		invalidate(name)
	}

	return [name, rename]
}

function fragment(ctx){
    let el0, el1, el2
    return {
        c(el){
            el0 = elment('button')
            el1 = text(ctx[0])
            listen(el2, 'click', ctx[1])
            insert(el, el0)
            insert(el0, el1)
        }
        u(el){
            text(el1, ctx[0])
        }
    }
}

export default Component.bind(null, ctx, fragment)
```
