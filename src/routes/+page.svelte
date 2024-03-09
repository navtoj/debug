<script lang="ts">
	import { appVersion, isBrowser, isBuilding, devMode } from '$lib/env';
	console.log({ isBrowser, isBuilding, devMode, appVersion });
</script>

<h1>SvelteKit</h1>
<h1>$app/environment</h1>

<br />
<br />
<br />
<br />
<br />

<p>Browser: {isBrowser}</p>
<p>Building: {isBuilding}</p>
<p>The mode is {devMode}.</p>
<p>The app version is {appVersion}.</p>

<br />
<p>Is this correct?</p>

<style>
	h1,
	p {
		text-align: center;
		font-size: 2.5em;
	}
</style>
