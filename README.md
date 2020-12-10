# homo

Tiny web component compiler without runtime.

```html
<script>
  let count = 0
  const add = () => count++
</script>

<button @click={add}>{count}</button>
```

This will compile to

```js
import { h } from 'homo' /*
	const h = (str , ...args) => {
		args = args.map(arg=> typeof arg === 'function'? arg = (e) => arg() && apply() : () => arg)
		const f = document.createDocumentFragment()
		f.innerHTML = str
		return args
	}
*/
export default () => {
	let count = 0
  	const add = () => count++
	return h`<button onclick=${add}>${count}</button>`
}
```
