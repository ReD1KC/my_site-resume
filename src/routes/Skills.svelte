<script>
	import FinanceColumn from './small_components/Finance_column.svelte';
	import ItColumn from './small_components/It_column.svelte';
	import ManagmentColumn from './small_components/Managment_column.svelte';
	import SoftColumn from './small_components/Soft_column.svelte';

	let selectedColumn = 'IT';
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Skills</h1>
		</div>
	</div>
	<div
		class="flex flex-col shadow-[-4px_-4px_104px_2px_rgba(172,172,172,0.2),9px_9px_35px_8px_rgba(0,0,0,0.25)] rounded-3xl"
	>
		<div class="flex justify-between w-full">
			<div class="grid grid-cols-4 gap-16 p-8 ustify-between w-full">
				<button
					class="flex-1 font-[RHD400] text-[32px] text-white pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'IT')}>IT</button
				>
				<button
					class="flex-1 font-[RHD400] text-[32px] text-white pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'Finance')}>Finance</button
				>
				<button
					class="flex-1 font-[RHD400] text-[32px] text-white pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'Managment')}>Managment</button
				>
				<button
					class="flex-1 font-[RHD400] text-[32px] text-white pt-5 pb-5 pr-16 pl-16 shadow-[-9px_-9px_20px_rgba(101,107,117,0.2),9px_9px_24px_8px_rgba(1,5,11,0.25)] rounded-3xl"
					on:click={() => (selectedColumn = 'Soft skills')}>Soft skills</button
				>
			</div>
		</div>
		<div class="flex w-full pt-10">
			<div class="flex w-1/4 items-center justify-center pb-10">
				{#if selectedColumn === 'IT'}
					<ItColumn />
				{:else if selectedColumn === 'Finance'}
					<FinanceColumn />
				{:else if selectedColumn === 'Managment'}
					<ManagmentColumn />
				{:else}
					<SoftColumn />
				{/if}
			</div>
			<div
				class="flex w-3/4 border shadow-[inset_8px_4px_44px_rgba(0,0,0,0.25)] rounded-2xl border-solid border-[#343232]"
			></div>
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
