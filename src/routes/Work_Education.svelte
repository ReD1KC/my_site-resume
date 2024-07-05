<script>
	import WeCard from './small_components/WE_Card.svelte';
	import Line from '../assets/images/line.svg';
</script>

<div class="flex-col">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Work and Educational</h1>
			<h1 class="flex text-white font-[RHD600] items-center justify-center">Road Map</h1>
		</div>
	</div>
	<div class="flex-col">
		<div class="flex">
			<WeCard year="2022" whom="John Doe" company="Acme Inc" />
			<WeCard year="2023" whom="Jane Doe" company="Foo Bar" />
			<WeCard year="2024" whom="Bob Smith" company="Baz Qux" />
			<WeCard year="2025" whom="Alice Johnson" company="Qux Corp" />
		</div>
		<div class="flex pt-12 pb-12"><img src={Line} alt="" /></div>
		<div class="flex">
			<WeCard year="2022" whom="John Doe" company="Acme Inc." />
			<WeCard year="2023" whom="Jane Doe" company="Foo Bar" />
			<WeCard year="2024" whom="Bob Smith" company="Baz Qux" />
			<WeCard year="2025" whom="Alice Johnson" company="Qux Corp" />
		</div>
	</div>
</div>
