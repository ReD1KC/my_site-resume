<script lang="ts">
import FinanceColumn from './small_components/Skill_columns/Finance_column.svelte';
import ItColumn from './small_components/Skill_columns/It_column.svelte';
import ManagmentColumn from './small_components/Skill_columns/Managment_column.svelte';
import SoftColumn from './small_components/Skill_columns/Soft_column.svelte';
import Space from './small_components/Skill_columns/Skill_spaces/Space.svelte';
import { fade } from 'svelte/transition';

let selectedColumn = '';
let group = '';

let buttons = [
	{ id: 1, label: 'IT', isPressed: false },
	{ id: 2, label: 'Finance', isPressed: false },
	{ id: 3, label: 'Managment', isPressed: false },
	{ id: 4, label: 'Soft skills', isPressed: false }
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
	group = '';
}
</script>

<div in:fade class="flex w-full flex-col gap-y-24">
	<div class="flex items-center justify-center text-center text-5xl leading-[64px] text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex font-[RHD600] text-white">Skills</h1>
		</div>
	</div>
	<div class="flex flex-col rounded-3xl shadow-blockShadow">
		<div class="flex w-full justify-between">
			<div class="grid w-full grid-cols-4 justify-between gap-16 p-8">
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
		<div class="flex w-full pt-10">
	<div class="flex w-1/4 items-center justify-center pb-10">
		{#if selectedColumn === 'IT'}
			<div in:fade={{ duration: 1200 }} class=""><ItColumn bind:group={group} /></div>
		{:else if selectedColumn === 'Finance'}
			<div in:fade={{ duration: 1200 }} class=""><FinanceColumn bind:group={group} /></div>
		{:else if selectedColumn === 'Managment'}
			<div in:fade={{ duration: 1200 }} class=""><ManagmentColumn bind:group={group} /></div>
		{:else if selectedColumn === 'Soft skills'}
			<div in:fade={{ duration: 1200 }} class=""><SoftColumn bind:group={group} /></div>
		{/if}
	</div>
	{#if selectedColumn}
		<div class="flex w-3/4 flex-col rounded-2xl border border-solid border-[#343232] shadow-skillField">
			{#if selectedColumn === 'IT'}
				{#if group === 'HTML & CSS'}
					<div in:fade={{ duration: 1200 }} class=""><Space name="Test" procent={50} /></div>
				{/if}
				{#if group === 'C#'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Python'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Java Script'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Git / GitHub'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Database Interfaces'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'SQL / NoSQL'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Rust'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Server Tools'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Mobile Development'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
			{/if}
			{#if selectedColumn === 'Managment'}
				{#if group === 'Personnel Management'}
					<div in:fade={{ duration: 1200 }} class=""><Space name="Test" procent={50} /></div>
				{/if}
				{#if group === 'Quality Management'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Business meetings and negotiations'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Project Management'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Innovative Managment'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
			{/if}
			{#if selectedColumn === 'Finance'}
				{#if group === 'Financial analytics'}
					<div in:fade={{ duration: 1200 }} class=""><Space name="Test" procent={50} /></div>
				{/if}
				{#if group === 'Financial and trading instruments'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
			{/if}
			{#if selectedColumn === 'Soft skills'}
				{#if group === 'Communication Skills'}
					<div in:fade={{ duration: 1200 }} class=""><Space name="Test" procent={50} /></div>
				{/if}
				{#if group === 'Interpersonal Skills'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Leadership Skills'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Problem-Solving Skills'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
				{#if group === 'Organizational Skills'}
					<div in:fade={{ duration: 1200 }} class="">
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					</div>
				{/if}
			{/if}
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
