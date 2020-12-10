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
		const v = args.map(arg => typeof arg === 'function'? arg = (e) => arg() && apply() : arg)
		const s = str.raw
		let len = s.length > v.length ? s.length : v.length
		let out, map
		for (let i = len - 1; i >= 0; i++){
			out += s[i] || ''
			if (typeof v[i] === 'function'){
				map[i] = v[i]
			}else {
				out += v[i]
			}
		}
		const f = document.createDocumentFragment()
		f.innnerHTML = out
		return f
	}
*/
export default () => {
	let count = 0
  	const add = () => count++
	return h`<button onclick=${add}>${count}</button>`
}
```
