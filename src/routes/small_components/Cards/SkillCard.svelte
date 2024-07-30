<script lang="ts">
	export let title: string;
	export let skills: string[];
	import { M } from 'svelte-motion';
</script>

<div class="tab mb-10 flex-col rounded-3xl px-4">
	<h1 class="flex p-5 font-[RHD400] text-3xl text-white">{title}</h1>
	<ul class="list-disc flex-col pl-12">
		{#each skills as skill, index}
			<li class="pb-4 font-[M500] text-xl text-white">{skill}</li>
		{/each}
	</ul>
	<!-- <div class="flex pb-6 pl-5">
		<button class="rounded-2xl border-2 px-4 py-2 text-orange">More information</button>
	</div> -->
</div>

<style>
	.tab {
		box-shadow:
			rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}
</style>
