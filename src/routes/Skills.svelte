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
		// { id: 2, label: 'Finance', isPressed: false },
		{ id: 3, label: 'Management', isPressed: false },
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
			<div class="grid w-full grid-cols-3 justify-between gap-16 p-8">
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
					<div in:fade={{ duration: 1200 }} class=""><ItColumn bind:group /></div>
					<!-- {:else if selectedColumn === 'Finance'}
					<div in:fade={{ duration: 1200 }} class=""><FinanceColumn bind:group /></div> -->
				{:else if selectedColumn === 'Management'}
					<div in:fade={{ duration: 1200 }} class=""><ManagmentColumn bind:group /></div>
				{:else if selectedColumn === 'Soft skills'}
					<div in:fade={{ duration: 1200 }} class=""><SoftColumn bind:group /></div>
				{/if}
			</div>
			{#if selectedColumn}
				<div
					class="flex w-3/4 flex-col rounded-2xl border border-solid border-[#343232] shadow-skillField"
				>
					{#if selectedColumn === 'IT'}
						{#if group === 'HTML & CSS'}
							<div in:fade={{ duration: 1200 }} class=""><Space name="HTML5" procent={100} /></div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="TailwindCSS" procent={85} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Responsive Design" procent={85} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Sass/SCSS" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class=""><Space name="CSS" procent={75} /></div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Animations and Transitions" procent={70} />
							</div>

							<div in:fade={{ duration: 1200 }} class="">
								<Space name="BEM Methodology" procent={70} />
							</div>
						{/if}
						{#if group === 'C#'}
							<div in:fade={{ duration: 1200 }} class=""><Space name="Basics" procent={80} /></div>
						{/if}
						{#if group === 'Python'}
							<div in:fade={{ duration: 1200 }} class=""><Space name="Basics" procent={80} /></div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Machine Learning" procent={70} />
							</div>
						{/if}
						{#if group === 'Java Script'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="TypeScript" procent={90} />
								<Space name="React" procent={80} />
								<Space name="Svelte" procent={80} />
								<Space name="Next.js" procent={80} />
								<Space name="Node.js" procent={70} />
								<Space name="Object-Oriented Programming (OOP)" procent={70} />
							</div>
						{/if}
						{#if group === 'Git / GitHub'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Basics" procent={100} />
								<Space name="Branching" procent={90} />
								<Space name="Pull Requests" procent={85} />
								<Space name="Git Flow" procent={80} />
								<Space name="Merge Conflicts" procent={75} />
							</div>
						{/if}
						{#if group === 'Database Interfaces'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Supabase" procent={80} />
								<Space name="Firebase" procent={70} />
							</div>
						{/if}
						{#if group === 'SQL / NoSQL'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="PostgreSQL" procent={80} />
								<Space name="MySQL" procent={75} />
								<Space name="MongoDB" procent={70} />
							</div>
						{/if}
						{#if group === 'Rust'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Cargo" procent={75} />
								<Space name="Basics" procent={70} />
								<Space name="Async Programming" procent={60} />
							</div>
						{/if}
						{#if group === 'Server Tools'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="PM2" procent={80} />
								<Space name="Linux server" procent={75} />
								<Space name="Docker" procent={75} />
								<Space name="CI/CD" procent={70} />
							</div>
						{/if}
						{#if group === 'Mobile Development'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Expo" procent={70} />
								<Space name="React Native" procent={70} />
							</div>
						{/if}
					{/if}
					{#if selectedColumn === 'Management'}
						{#if group === 'Personnel Management'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Team Building" procent={80} />
							</div>
						{/if}
						{#if group === 'Quality Management'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Quality Assurance" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Continuous Improvement" procent={75} />
							</div>
						{/if}
						{#if group === 'Business meetings and negotiations'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Effective Communication" procent={90} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Negotiation Tactics" procent={75} />
							</div>
						{/if}
						{#if group === 'Project Management'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Agile Methodology" procent={90} />
							</div>
							<div in:fade={{ duration: 1200 }} class=""><Space name="Scrum" procent={90} /></div>
						{/if}
						{#if group === 'Innovative Management'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Change Management" procent={100} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Creative Thinking" procent={90} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Innovation Strategies" procent={90} />
							</div>
						{/if}
					{/if}
					<!-- {#if selectedColumn === 'Finance'}
						{#if group === 'Financial analytics'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Data Analysis" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Forecasting" procent={75} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Risk Management" procent={70} />
							</div>
						{/if}
						{#if group === 'Financial and trading instruments'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Stocks and Bonds" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Derivatives" procent={75} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Forex Trading" procent={70} />
							</div>
						{/if} -->
					<!-- {/if} -->
					{#if selectedColumn === 'Soft skills'}
						{#if group === 'Communication Skills'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Active Listening" procent={80} />
							</div>
						{/if}
						{#if group === 'Interpersonal Skills'}
							<div in:fade={{ duration: 1200 }} class=""><Space name="Empathy" procent={90} /></div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Collaboration" procent={90} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Conflict Resolution" procent={90} />
							</div>
						{/if}
						{#if group === 'Leadership Skills'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Decision Making" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Motivating Others" procent={60} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Delegation" procent={60} />
							</div>
						{/if}
						{#if group === 'Problem-Solving Skills'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Analytical Thinking" procent={80} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Creativity" procent={75} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Decision Making" procent={70} />
							</div>
						{/if}
						{#if group === 'Organizational Skills'}
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Time Management" procent={90} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Prioritization" procent={65} />
							</div>
							<div in:fade={{ duration: 1200 }} class="">
								<Space name="Attention to Detail" procent={60} />
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
