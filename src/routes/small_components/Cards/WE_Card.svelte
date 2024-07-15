<script lang="ts">
	export let year: string;
	export let whom: string;
	export let company: string;
	export let width: number;
</script>

<div class="flex-col border-2 rounded-xl" style={`width: ${width}px`}>
	<button class="m-2 border-2 rounded-2xl px-2 py-1 text-white text-xs">More info</button>
	<h1 class="flex items-center justify-center text-white font-[M600] text-base">{year}</h1>
	<h1 class="flex items-center justify-center py-3 text-white font-[M400] text-2xl">
		{whom}
	</h1>
	<h1 class="flex items-center justify-center text-white font-[M600] pb-3">
		{company}
	</h1>
</div>

<style>
	button:hover {
	}
</style>
