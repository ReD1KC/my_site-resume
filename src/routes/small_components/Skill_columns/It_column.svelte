<script lang="ts">
	let group: string;
</script>

<div class="flex flex-col items-center justify-center gap-y-10">
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'HTML & CSS')}
		>HTML & CSS</button
	>
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'C#')}
		>C#</button
	>
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'Python')}
		>Python</button
	>
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'Java Script')}
		>Java Script</button
	>
	<button
		class="flex text-white font-[RHD800] text-[18px]"
		on:click={() => (group = 'IGit / GitHub')}
		>Git / GitHub
	</button>
	<button
		class="flex text-white font-[RHD800] text-[18px]"
		on:click={() => (group = 'Database Interfaces')}>Database Interfaces</button
	>
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'SQL / NoSQL')}
		>SQL / NoSQL</button
	>
	<button class="flex text-white font-[RHD800] text-[18px]" on:click={() => (group = 'Rust')}
		>Rust</button
	>
	<button
		class="flex text-white font-[RHD800] text-[18px]"
		on:click={() => (group = 'Server Tools')}>Server Tools</button
	>
	<button
		class="flex text-white font-[RHD800] text-[18px]"
		on:click={() => (group = 'Mobile Development')}>Mobile Development</button
	>
</div>

<style>
</style>
