# voe

Web component compiler.

# 还没写完，暂时放弃，未来重新开坑

### Feature

- **Idom instead of vdom** — It no longer needs vdom, but a tree in memory, which is a technology of [Angular ivy](https://github.com/angular/angular/blob/master/aio/content/guide/ivy.md)

- **Staic template optimization** — This is a coarse-grained staic template optimization idea from [vue3 block tree](https://zhuanlan.zhihu.com/p/150732926)

- **Binary template** - A fast parse scheme from [glimmer.js](https://www.linkedin.com/pulse/glimmers-optimizing-compiler-chad-hietala/)

### Use

```svelte
<script>
  export default {
    data: 0,
    add() {
      this.data++
    }
  }
</script>

<button @click={add} style={ padding: 10; margin: 10; }>{count}</button>
```
