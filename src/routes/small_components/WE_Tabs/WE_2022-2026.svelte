<script>
	import WeCard from '../Cards/WE_Card.svelte';
	import Line2 from '/home/konstantin/_sd/IT_Projects/my_site-resume/src/assets/images/line2.svg';
</script>

<div class="flex flex-col gap-y-10">
	<div class="w-full">
		<div class="flex relative">
			<WeCard
				year="Nov. 2022 - Today"
				whom="Full-stack Developer"
				company="themCodes OÜ, Tallinn"
				width={1000}
				borderColor="#FA8E41"
			/>
		</div>
		<div class="flex">
			<div class="flex pt-5 pb-12"><img src={Line2} alt="" /></div>
		</div>
	</div>
</div>

<style></style>
