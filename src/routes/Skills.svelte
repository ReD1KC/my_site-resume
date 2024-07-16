<script lang="ts">
	import FinanceColumn from './small_components/Skill_columns/Finance_column.svelte';
	import ItColumn from './small_components/Skill_columns/It_column.svelte';
	import ManagmentColumn from './small_components/Skill_columns/Managment_column.svelte';
	import SoftColumn from './small_components/Skill_columns/Soft_column.svelte';
	import Space from './small_components/Skill_columns/Skill_spaces/Space.svelte';

	let selectedColumn = 'IT';
	let group: string = '';

	const groups = {
		IT: [
			{ name: 'HTML & CSS', procent: 50 },
			{ name: 'C#', procent: 50 },
			{ name: 'Python', procent: 50 },
			{ name: 'Java Script', procent: 50 },
			{ name: 'Git / GitHub', procent: 50 },
			{ name: 'Database Interfaces', procent: 50 },
			{ name: 'SQL / NoSQL', procent: 50 },
			{ name: 'Rust', procent: 50 },
			{ name: 'Server Tools', procent: 50 },
			{ name: 'Mobile Development', procent: 50 }
		],
		Managment: [
			{ name: 'Personnel Management', procent: 50 },
			{ name: 'Quality Management', procent: 50 },
			{ name: 'Business meetings and negotiations', procent: 50 },
			{ name: 'Project Management', procent: 50 },
			{ name: 'Innovative Managment', procent: 50 }
		],
		Finance: [
			{ name: 'Financial analytics', procent: 50 },
			{ name: 'Financial and trading instruments', procent: 50 }
		],
		SoftSkills: [
			{ name: 'Communication Skills', procent: 50 },
			{ name: 'Interpersonal Skills', procent: 50 },
			{ name: 'Leadership Skills', procent: 50 },
			{ name: 'Problem-Solving Skills', procent: 50 },
			{ name: 'Organizational Skills', procent: 50 }
		]
	};
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Skills</h1>
		</div>
	</div>
	<div class="flex flex-col shadow-blockShadow rounded-3xl">
		<div class="flex justify-between w-full">
			<div class="grid grid-cols-4 gap-16 p-8 ustify-between w-full">
				<button
					class="flex-1 font-[RHD400] text-3xl text-white py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => ((selectedColumn = 'IT'), (group = ''))}>IT</button
				>
				<button
					class="flex-1 font-[RHD400] text-3xl text-white py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => ((selectedColumn = 'Finance'), (group = ''))}>Finance</button
				>
				<button
					class="flex-1 font-[RHD400] text-3xl text-white py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => ((selectedColumn = 'Managment'), (group = ''))}>Managment</button
				>
				<button
					class="flex-1 font-[RHD400] text-3xl text-white py-5 px-16 shadow-bigButton rounded-3xl"
					on:click={() => ((selectedColumn = 'Soft skills'), (group = ''))}>Soft skills</button
				>
			</div>
		</div>
		<div class="flex w-full pt-10">
			<div class="flex w-1/4 items-center justify-center pb-10">
				{#if selectedColumn === 'IT'}
					<ItColumn bind:group />
				{:else if selectedColumn === 'Finance'}
					<FinanceColumn bind:group />
				{:else if selectedColumn === 'Managment'}
					<ManagmentColumn bind:group />
				{:else}
					<SoftColumn bind:group />
				{/if}
			</div>
			<div
				class="flex flex-col w-3/4 border shadow-skillField rounded-2xl border-solid border-[#343232]"
			>
				{#if selectedColumn === 'IT'}
					{#if group === 'HTML & CSS'}
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'C#'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Python'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Java Script'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Git / GitHub'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Database Interfaces'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'SQL / NoSQL'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Rust'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Server Tools'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Mobile Development'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
				{/if}
				{#if selectedColumn === 'Managment'}
					{#if group === 'Personnel Management'}
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Quality Management'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Business meetings and negotiations'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Project Management'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Innovative Managment'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
				{/if}
				{#if selectedColumn === 'Finance'}
					{#if group === 'Financial analytics'}
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Financial and trading instruments'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
				{/if}
				{#if selectedColumn === 'SoftSkills'}
					{#if group === 'Communication Skills'}
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Interpersonal Skills'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Leadership Skills'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Problem-Solving Skills'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
					{#if group === 'Organizational Skills'}
						<Space name="Test" procent={50} />
						<Space name="Test" procent={50} />
					{/if}
				{/if}
			</div>
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
