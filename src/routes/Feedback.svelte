<script>
	import Portfolio from './small_components/Feedback_components/Portfolio.svelte';
	import Recomendations from './small_components/Feedback_components/Recomendations.svelte';
	import Wps from './small_components/Feedback_components/WPS.svelte';
	import { fade } from 'svelte/transition';

	let selectedColumn = 'WPS';
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Feedback</h1>
		</div>
	</div>
	<div class="flex flex-col shadow-blockShadow rounded-3xl">
		<div class="flex justify-between w-full">
			<div class="grid grid-cols-2 gap-16 p-8 justify-between w-full">
				<button
					class="flex-1 font-[RHD400] text-3xl text-white py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => (selectedColumn = 'WPS')}>What People Say</button
				>
				<button
					class="flex-1 font-[RHD400] text-3xl text-[orange] py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => (selectedColumn = 'Recomend')}>Recommendation & Certificates</button
				>
				<button
					class="flex-1 font-[RHD400] text-3xl text-[orange] py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => (selectedColumn = 'Portfolio')}>Portfolio</button
				>
			</div>
		</div>
		<div class="flex pb-10">
			{#if selectedColumn === 'WPS'}
				<div in:fade={{ duration: 1500 }} class=""><Wps /></div>
			{:else if selectedColumn === 'Recomend'}
				<div in:fade={{ duration: 1500 }} class=""><Recomendations /></div>
			{:else}
				<div in:fade={{ duration: 1500 }} class=""><Portfolio /></div>
			{/if}
		</div>
	</div>
</div>

<style>
	button:active {
		background-color: #222427;
		box-shadow:
			inset -9px -9px 48px rgba(101, 107, 117, 0.2),
			inset 9px 9px 24px 8px rgba(1, 5, 11, 0.4);
		border-radius: 24px;
	}
</style>
