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
import { h } from 'homo'
export default () => {
	let count = 0
  	const add = () => count++
	return h`<button @click=${add}>${count}</button>` /*
	  const el0 = document.createElement('button')
	  el0.innerHTML = `<button>${() => count}</button>`
	  el0.addEventListener('click', () => { add(); invalidate(); })
	*/
}
```
