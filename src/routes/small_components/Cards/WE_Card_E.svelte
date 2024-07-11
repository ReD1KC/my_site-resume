<script>
	export let year;
	export let whom;
	export let company;
	export let width;
</script>

<div class="flex-col border-2 rounded-[9px] w-[516px] border-blue" style={`width: ${width}px`}>
	<button class="m-2 border-[2px] rounded-[20px] pr-2 pl-2 pt-1 pb-1 text-white text-[10px]"
		>More info</button
	>
	<h1 class="flex items-center justify-center text-white font-[M600] text-[16px]">{year}</h1>
	<h1 class="flex items-center justify-center pb-3 pt-3 text-white font-[M400] text-[24px]">
		{whom}
	</h1>
	<h1 class="flex items-center justify-center text-white font-[M600] text-[14px] pb-3">
		{company}
	</h1>
</div>

<style>
	button:hover {
	}
</style>
