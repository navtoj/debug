## data-sveltekit-replacestate

The [`data-sveltekit-replacestate`](https://kit.svelte.dev/docs/link-options#data-sveltekit-replacestate) attribute in the [`/login`](./src/routes/login/+page.svelte) page is not working as expected.

## Behavior

### Expected

0. Start at `/login` page.
1. Click the `Go to /login/redirect` anchor element.
2. Press the `Back` button in the browser.
3. The browser should `NOT` be able to go back to the `/login` page.

### Actual

3. The browser is able to go back to the `/login` page.

## Steps to Reproduce

```bash
# clone the project branch
git clone --single-branch --branch data-sveltekit-replacestate https://github.com/navtoj/debug.git data-sveltekit-replacestate

# change directory to the project
cd data-sveltekit-replacestate

# install the dependencies
npm install

# start the server (and open the app in a new browser tab)
npm run dev
# OR
npm run dev -- --open
```

### Direct Download

[https://github.com/navtoj/debug/archive/refs/heads/data-sveltekit-replacestate.zip](https://github.com/navtoj/debug/archive/refs/heads/data-sveltekit-replacestate.zip)
