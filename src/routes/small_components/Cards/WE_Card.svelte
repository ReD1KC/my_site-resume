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
	<h1 class="flex items-center justify-center font-[M600] text-base pt-5 text-white">{year}</h1>
	<h1 class="flex items-center justify-center py-3 font-[M400] text-2xl text-white">
		{whom}
	</h1>
	<h1 class="flex items-center justify-center pb-3 font-[M600] text-white">
		{company}
	</h1>
</div>

<style>
</style>
