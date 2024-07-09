<script>
	import Recomendations from './small_components/Feedback_components/Recomendations.svelte';
	import Wps from './small_components/Feedback_components/WPS.svelte';

	let selectedColumn = 'WPS';
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Feedback</h1>
		</div>
	</div>
	<div
		class="flex flex-col shadow-[-4px_-4px_104px_2px_rgba(172,172,172,0.2),9px_9px_35px_8px_rgba(0,0,0,0.25)] rounded-3xl"
	>
		<div class="flex justify-between w-full">
			<div class="grid grid-cols-2 gap-16 p-8 justify-between w-full">
				<button
					class="flex-1 font-[RHD400] text-[32px] text-white pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'WPS')}>What People Say</button
				>
				<button
					class="flex-1 font-[RHD400] text-[32px] text-[orange] pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'Recomend')}>Recommendation & Certificates</button
				>
			</div>
		</div>
		<div class="flex items-center justify-center pb-10">
			{#if selectedColumn === 'WPS'}
				<Wps />
			{:else}
				<Recomendations />
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
