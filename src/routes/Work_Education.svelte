<script>
	import WeCard from './small_components/WE_Card.svelte';
</script>

<div class="flex-col pt-28 relative">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Work and Educational</h1>
			<h1 class="flex text-white font-[RHD600] items-center justify-center">Road Map</h1>
		</div>
	</div>
	<div class="flex-col pt-10">
		<div class="flex">
			<WeCard />
			<WeCard />
			<WeCard />
			<WeCard />
		</div>
		<div class="flex pt-12 pb-12">!!!</div>
		<div class="flex">
			<WeCard year="2022" whom="John Doe" company="Acme Inc." borderColor="#48B3F2" />
			<WeCard year="2023" whom="Jane Doe" company="Foo Bar" borderColor="#48B3F2" />
			<WeCard year="2024" whom="Bob Smith" company="Baz Qux" borderColor="#48B3F2" />
			<WeCard year="2025" whom="Alice Johnson" company="Qux Corp" borderColor="#48B3F2" />
		</div>
	</div>
</div>
