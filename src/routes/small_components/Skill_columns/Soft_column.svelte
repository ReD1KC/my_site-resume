<script lang="ts">
	export let group: string = '';
</script>

<div class="flex flex-col items-center justify-center gap-y-10">
	<button
		class="flex text-white font-[RHD800] text-lg on:click={() => (group = 'Communication Skills')}"
		>Communication Skills</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg on:click={() => (group = 'Interpersonal Skills')}"
		>Interpersonal Skills</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg on:click={() => (group = 'Leadership Skills')}"
		>Leadership Skills</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg on:click={() =>
			(group = 'Problem-Solving Skills')}">Problem-Solving Skills</button
	>
	<button
		class="flex text-white font-[RHD800] text-lg on:click={() => (group = 'Organizational Skills')}"
		>Organizational Skills</button
	>
</div>

<style>
</style>
