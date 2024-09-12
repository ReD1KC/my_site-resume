<script lang="ts">
	import Portfolio from './small_components/Feedback_components/Portfolio.svelte';
	import Recomendations from './small_components/Feedback_components/Recomendations.svelte';
	import Wps from './small_components/Feedback_components/WPS.svelte';
	import { fade } from 'svelte/transition';

	let selectedColumn = '';

	let buttons = [
		// { id: 1, label: 'What People Say', isPressed: false },
		{ id: 2, label: 'Recommendations & Certificates', isPressed: false },
		{ id: 3, label: 'Portfolio', isPressed: false }
	];

	function handleClick(button: any) {
		buttons = buttons.map((b) => {
			if (b.id === button.id) {
				return { ...b, isPressed: true };
			} else {
				return { ...b, isPressed: false };
			}
		});
		selectedColumn = button.label;
	}
</script>

<div class="flex w-full flex-col gap-y-24">
	<div class="flex items-center justify-center text-center text-5xl leading-[64px] text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 in:fade={{ duration: 1500 }} class="flex font-[RHD600] text-white">
				Proof of <snap class="pl-3 text-orange">Expertise</snap>
			</h1>
		</div>
	</div>
	<div class="flex flex-col rounded-3xl shadow-blockShadow">
		<div class="flex w-full justify-between">
			<div class="grid w-full grid-cols-2 justify-between gap-16 p-8">
				{#each buttons as button}
					<button
						class="button flex-1 rounded-3xl px-16 py-5 font-[RHD400] text-3xl text-white shadow-bigButton"
						on:click={() => handleClick(button)}
						class:pressed={button.isPressed}
					>
						{button.label}
					</button>
				{/each}
			</div>
		</div>
		<div class="flex pb-10">
			<!-- {#if selectedColumn === 'What People Say'}
				<div in:fade={{ duration: 1500 }} class=""><Wps /></div> -->
			{#if selectedColumn === 'Recommendations & Certificates'}
				<div in:fade={{ duration: 1500 }} class=""><Recomendations /></div>
			{:else if selectedColumn === 'Portfolio'}
				<div in:fade={{ duration: 1500 }} class="">
					<Portfolio
						href="http://taqc.ru"
						duties={[
							'Writing all the code of the site',
							'Connections of services for sending data to mail and to the database'
						]}
						technology={['Next.js', 'TypeScript', 'TailwindCSS']}
					/>
					<Portfolio
					href="http://taqc.ru"
					duties={[
						'Writing all the code of the site',
						'Connections of services for sending data to mail and to the database'
					]}
					technology={['Next.js', 'TypeScript', 'TailwindCSS']}
				/>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.button:active {
		background-color: #222427;
		box-shadow:
			inset -9px -9px 48px rgba(101, 107, 117, 0.2),
			inset 9px 9px 24px 8px rgba(1, 5, 11, 0.4);
		border-radius: 24px;
	}

	.button.pressed {
		background-color: #222427;
		box-shadow:
			inset -9px -9px 48px rgba(101, 107, 117, 0.2),
			inset 9px 9px 24px 8px rgba(1, 5, 11, 0.4);
		border-radius: 24px;
		color: orange;
	}
</style>
