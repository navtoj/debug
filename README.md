## data-sveltekit-replacestate

Github Issue: https://github.com/sveltejs/kit/issues/11942

```shell
src/
├── app.d.ts
├── app.html
└── routes
    ├── +page.svelte
    └── login
        ├── +page.svelte  <<< BUG_IS_HERE
        └── redirect
            └── +server.ts

4 directories, 5 files
```
