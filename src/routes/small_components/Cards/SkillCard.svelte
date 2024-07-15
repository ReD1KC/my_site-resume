<script lang="ts">
	export let title: string;
	export let skills: string[];
</script>

<div class="flex-col mb-10 pl-4 rounded-3xl shadow-skillCard">
	<h1 class="flex text-white font-[RHD400] p-5 text-3xl">{title}</h1>
	<ul class="flex-col list-disc pl-12">
		{#each skills as skill, index}
			<li class="text-white pb-4 font-[M500] text-xl">{skill}</li>
		{/each}
	</ul>
	<div class="flex pl-5 pb-6">
		<button class="border-4 rounded-2xl py-2 px-4 text-white">More information</button>
	</div>
</div>

<style>
	button:hover {
	}
</style>
