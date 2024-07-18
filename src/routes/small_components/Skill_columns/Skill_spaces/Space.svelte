<script lang="ts">
	import { fade } from 'svelte/transition';

	export let name: string;
	export let procent: number;
</script>

<div class="flex px-16 pt-5 w-full justify-between">
	<div class="flex text-white text-2xl font-[RHD400]">{name}</div>
	<div class="flex pt-4">
		<div class="flex scale">
			<div class="flex fill" style={`width: ${procent}%;`}></div>
		</div>
	</div>
</div>

<style>
	.scale {
		width: 500px;
		height: 10px;
		background-color: black;
		border-radius: 10px;
	}

	.fill {
		height: 100%;
		background-color: #fa8e41;
		border-radius: 10px;
	}
</style>
