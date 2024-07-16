<script lang="ts">
	export let group: string = '';
</script>

<div class="flex flex-col items-center justify-center gap-y-10">
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Personnel Management')}>Personnel Management</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Quality Management')}>Quality Management</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Business meetings and negotiations')}
		>Business meetings and negotiations</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Project Management')}>Project Management</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg"
		on:click={() => (group = 'Innovative Managment')}>Innovative Managment</button
	>
</div>

<style>
</style>
