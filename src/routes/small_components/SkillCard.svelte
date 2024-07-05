<script>
	export let title;
	export let skills;
</script>

<div
	class="flex-col mb-10 pl-4 shadow-[9px_9px_40px_13px_rgba(13,12,12,0.4),-6px_-6px_40px_5px_rgba(245,249,255,0.4)] rounded-3xl inset-[0%]"
>
	<h1 class="flex text-white font-[RHD400] p-5 text-[32px]">{title}</h1>
	<ul class="flex-col list-disc pl-12">
		{#each skills as skill, index}
			<li class="text-white pb-4 font-[M500] text-[18px]">{skill}</li>
		{/each}
	</ul>
	<div class="flex pl-5 pb-6">
		<button class="border-[3px] rounded-[20px] pt-2 pb-2 pr-4 pl-4 text-white"
			>More information</button
		>
	</div>
</div>
