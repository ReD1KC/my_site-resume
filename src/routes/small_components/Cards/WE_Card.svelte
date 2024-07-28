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
	<button class="m-2 rounded-2xl border-2 px-2 py-1 text-xs text-white">More info</button>
	<h1 class="flex items-center justify-center font-[M600] text-base text-white">{year}</h1>
	<h1 class="flex items-center justify-center py-3 font-[M400] text-2xl text-white">
		{whom}
	</h1>
	<h1 class="flex items-center justify-center pb-3 font-[M600] text-white">
		{company}
	</h1>
</div>

<style>
</style>
