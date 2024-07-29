<script lang="ts">
	import { fade } from 'svelte/transition';

	export let name: string;
	export let procent: number;
</script>

<div class="flex w-full justify-between px-16 py-6">
	<div class="flex font-[RHDI] text-2xl text-white">{name}</div>
	<div class="flex pt-4">
		<div class="scale flex">
			<div class="fill flex" style={`width: ${procent}%;`}></div>
		</div>
	</div>
</div>

<style>
	.scale {
		width: 500px;
		height: 10px;
		background-color: #847979;
		border-radius: 10px;
	}

	.fill {
		height: 100%;
		background-color: #fa8e41;
		border-radius: 10px;
	}
</style>
