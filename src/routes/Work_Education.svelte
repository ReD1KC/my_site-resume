<script lang="ts">
	import We_2018_2022 from './small_components/WE_Tabs/WE_2018-2022.svelte';
	import We_2022_2026 from './small_components/WE_Tabs/WE_2022-2026.svelte';
	import { fade } from 'svelte/transition';

	let activeTab = 'tab1';
</script>

<div class="flex flex-col gap-y-24 w-full">
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
		<div class="flex gap-5 pb-5">
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
	button {
		align-items: center;
		appearance: none;
		background-color: #ccc;
		border-radius: 4px;
		border-width: 0;
		box-shadow:
			rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		box-sizing: border-box;
		color: #36395a;
		cursor: pointer;
		display: inline-flex;
		font-family: 'JetBrains Mono', monospace;
		height: 48px;
		justify-content: center;
		line-height: 1;
		list-style: none;
		overflow: hidden;
		padding-left: 16px;
		padding-right: 16px;
		position: relative;
		text-align: left;
		text-decoration: none;
		transition:
			box-shadow 0.15s,
			transform 0.15s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		will-change: box-shadow, transform;
		font-size: 18px;
	}

	button:active {
		transform: translateY(8px);
	}

	.active {
		background-color: #ffa500; /* add this to style the active button */
	}
</style>
