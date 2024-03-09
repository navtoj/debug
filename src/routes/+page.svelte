<script lang="ts">
	import { appVersion, isBrowser, isBuilding, mode } from '$lib/index';
	console.log({ isBrowser, isBuilding, mode, appVersion });
</script>

<h1>SvelteKit</h1>
<h1>$app/environment</h1>
<h1>{'{ dev }'}</h1>

<br />
<br />
<br />
<br />
<br />

<p>browser: {isBrowser}.</p>
<p>building: {isBuilding}.</p>
<p>The mode is {mode}.</p>
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
