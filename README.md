# homo

Tiny web component compiler without runtime.

```html
<script>
  let count = 0

  function add() {
    count++
  }
</script>

<button onclick="{add}">{name}</button>
```

This will compile to

```js
export default () => {
	const [count, setCount] = useState(0)

  	function add() {
    		setState(count + 1)
  	}
	return (
		<button onClick={renanme}></button>
	)
}
```
