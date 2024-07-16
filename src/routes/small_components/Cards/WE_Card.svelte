<script lang="ts">
	export let year: string;
	export let whom: string;
	export let company: string;
	export let width: number;
	export let borderColor: string;
</script>

<div
	class="flex-col"
	style={`width: ${width}px; border: 2px solid ${borderColor}; border-radius: 1rem`}
>
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
</style>
