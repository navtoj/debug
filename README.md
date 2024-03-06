## data-sveltekit-replacestate

Github Issue: https://github.com/sveltejs/kit/issues/11942

```console
src/
├── app.d.ts
├── app.html
└── routes
    ├── +page.svelte
    └── login
        ├── +page.svelte     <<<--- BUG HERE
        └── redirect
            └── +server.ts

4 directories, 5 files
```
