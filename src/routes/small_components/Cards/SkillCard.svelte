<script lang="ts">
	export let title: string;
	export let skills: string[];
	import { M } from 'svelte-motion';
</script>

<div class="flex-col mb-10 px-4 rounded-3xl tab">
	<h1 class="flex text-white font-[RHD400] p-5 text-3xl">{title}</h1>
	<ul class="flex-col list-disc pl-12">
		{#each skills as skill, index}
			<li class="text-white pb-4 font-[M500] text-xl">{skill}</li>
		{/each}
	</ul>
	<div class="flex pl-5 pb-6">
		<button class="border-2 rounded-2xl py-2 px-4 text-orange">More information</button>
	</div>
</div>

<style>
	.tab {
		box-shadow:
			rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}
</style>
