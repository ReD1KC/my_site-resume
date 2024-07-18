<script lang="ts">
	import We_2018_2022 from './small_components/WE_Tabs/WE_2018-2022.svelte';
	import We_2022_2026 from './small_components/WE_Tabs/WE_2022-2026.svelte';
	import { fade } from 'svelte/transition';

	let activeTab = 'tab1';
</script>

<div class="flex flex-col gap-y-2 w-full">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">
				<span class="text-orange pr-3">Work</span> and
				<span class="text-blue pl-3">Educational</span>
			</h1>
			<h1 class="flex text-white font-[RHD600] items-center justify-center">Road Map</h1>
		</div>
	</div>
	<div class="flex flex-col overflow-x-auto">
		<div class="tab-header">
			<div in:fade={{ duration: 1500 }} class="">
				<button class={activeTab === 'tab1' ? 'active' : ''} on:click={() => (activeTab = 'tab1')}
					>2018 - 2022</button
				>
			</div>
			<div in:fade={{ duration: 1500 }} class="">
				<button class={activeTab === 'tab2' ? 'active' : ''} on:click={() => (activeTab = 'tab2')}
					>2022 - 2026</button
				>
			</div>
		</div>
		{#if activeTab === 'tab1'}
			<div in:fade={{ duration: 1500 }} class=""><We_2018_2022 /></div>
		{:else}
			<div in:fade={{ duration: 1500 }} class=""><We_2022_2026 /></div>
		{/if}
	</div>
</div>

<style>
	.flex.flex-col.overflow-x-auto::-webkit-scrollbar {
		height: 10px; /* adjust the height of the scrollbar */
		background-color: orange; /* adjust the background color of the scrollbar */
	}

	.flex.flex-col.overflow-x-auto::-webkit-scrollbar-thumb {
		background-color: white; /* adjust the color of the scrollbar thumb */
		border-radius: 10px; /* adjust the border radius of the scrollbar thumb */
	}

	.flex.flex-col.overflow-x-auto::-webkit-scrollbar-track {
		background-color: orange; /* adjust the background color of the scrollbar track */
	}

	.tab-header {
		display: flex;
	}
	.tab-header button {
		padding: 5px;
		margin: 5px;
		border-radius: 5px;
		background-color: #f0f0f0;
		cursor: pointer;
	}
	.tab-header button.active {
		background-color: orange;
	}
</style>
