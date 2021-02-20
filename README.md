# homo

Tiny web component compiler without runtime.

* 暂时废弃 *

```html
<script>
  let count = 0
  const add = () => count++
</script>

<button @click={add}>{count}</button>
```

This will compile to

```js
import { f, h } from 'homo'
export default () => {
	let count = 0
  	const add = () => count++
	let n0, n1
	return () => {
		const f = f('<button></button>')
		n0 = f
		n1 = f.firstChild
		
		h.ael(n0, add)
		h.nv(n1, count)
		return f
	}
}
```
