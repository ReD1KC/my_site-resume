<script lang="ts">
export let group: string = '';

let buttons = [
	{ label: 'Communication Skills', isPressed: false },
	{ label: 'Interpersonal Skills', isPressed: false },
	{ label: 'Leadership Skills', isPressed: false },
	{ label: 'Problem-Solving Skills', isPressed: false },
	{ label: 'Organizational Skills', isPressed: false }
];

function handleClick(button: any) {
	buttons = buttons.map((b) => {
		if (b.label === button.label) {
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
			class="button flex rounded-3xl border-[1px] border-orange px-5 py-2 font-[RHD800] text-lg text-white shadow-bigButton"
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
