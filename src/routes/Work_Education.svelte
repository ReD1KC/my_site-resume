<script>
	import WeCard from './small_components/Cards/WE_Card.svelte';
	import Line from '../assets/images/line.svg';
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Work and Educational</h1>
			<h1 class="flex text-white font-[RHD600] items-center justify-center">Road Map</h1>
		</div>
	</div>
	<div class="flex flex-col overflow-x-auto">
		<div class="flex flex-nowrap">
			<div class="w-full">
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
			<!-- Add more pages here -->
			<div class="w-full">
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
			<div class="w-full">
				<!-- Page 3 content -->
			</div>
			<!-- ... -->
		</div>
	</div>
</div>

<style>
	.flex.flex-col.overflow-x-auto::-webkit-scrollbar {
		height: 10px; /* adjust the height of the scrollbar */
		background-color: orange; /* adjust the background color of the scrollbar */
	}

	.flex.flex-col.overflow-x-auto::-webkit-scrollbar-thumb {
		background-color: white; /* adjust the color of the scrollbar thumb */
		border-radius: 10px; /* adjust the border radius of the scrollbar thumb */
	}

	.flex.flex-col.overflow-x-auto::-webkit-scrollbar-track {
		background-color: orange; /* adjust the background color of the scrollbar track */
	}
</style>
