<script>
import WeCard from '../Cards/WE_Card.svelte';
import Line2 from '/home/konstantin/_sd/IT_Projects/my_site-resume/src/assets/images/line2.svg';
</script>

<div class="flex flex-col gap-y-10">
	<div class="w-full">
		<div class="relative flex">
			<WeCard
				year="Nov. 2022 - Today"
				whom="Software Engineer"
				company="themCodes OÜ, Tallinn"
				width={1000}
				borderColor="#FA8E41"
			/>
		</div>
		<div class="flex">
			<div class="flex pb-12 pt-5"><img src={Line2} alt="" /></div>
		</div>
	</div>
</div>

<style></style>
