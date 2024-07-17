<script lang="ts">
	export let group: string = '';

	let buttons = [
		{ id: 1, label: 'HTML & CSS', isPressed: false },
		{ id: 2, label: 'C#', isPressed: false },
		{ id: 3, label: 'Python', isPressed: false },
		{ id: 4, label: 'Java Script', isPressed: false },
		{ id: 5, label: 'Git / GitHub', isPressed: false },
		{ id: 6, label: 'Database Interfaces', isPressed: false },
		{ id: 7, label: 'SQL / NoSQL', isPressed: false },
		{ id: 8, label: 'Rust', isPressed: false },
		{ id: 9, label: 'Server Tools', isPressed: false },
		{ id: 10, label: 'Mobile Development', isPressed: false }
	];

	function handleClick(button: any) {
		buttons = buttons.map((b) => {
			if (b.id === button.id) {
				return { ...b, isPressed: true };
			} else {
				return { ...b, isPressed: false };
			}
		});
		group = button.label;
	}
</script>

<div class="flex flex-col items-center justify-center gap-y-10">
	{#each buttons as button}
		<button
			class="button flex text-white font-[RHD800] shadow-bigButton rounded-3xl px-5 py-2 border-[1px] border-orange"
			on:click={() => handleClick(button)}
			class:pressed={button.isPressed}
		>
			{button.label}
		</button>
	{/each}
</div>

<style>
	.button:active,
	.button.pressed {
		background-color: #222427;
		box-shadow:
			inset -9px -9px 48px rgba(101, 107, 117, 0.2),
			inset 9px 9px 24px 8px rgba(1, 5, 11, 0.4);
		border-radius: 24px;
		color: orange;
	}
</style>
