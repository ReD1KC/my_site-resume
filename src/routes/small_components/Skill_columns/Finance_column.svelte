<script lang="ts">
	export let group: string = '';
</script>

<div class="flex flex-col items-center justify-center gap-y-10">
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Financial analytics')}>Financial analytics</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Financial and trading instruments')}
		>Financial and trading instruments</button
	>
</div>

<style>
</style>
