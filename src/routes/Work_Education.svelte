<script>
	import WeCard from './small_components/Cards/WE_Card_W.svelte';
	import WeCardE from './small_components/Cards/WE_Card_E.svelte';
	import Line from '../assets/images/line.svg';
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">
				<span class="text-orange pr-3">Work</span> and
				<span class="text-blue pl-3">Educational</span>
			</h1>
			<h1 class="flex text-white font-[RHD600] items-center justify-center">Road Map</h1>
		</div>
	</div>
	<div class="flex flex-col overflow-x-auto">
		<div class="flex">
			<div class="w-full">
				<div class="flex flex-col gap-y-1 relative">
					<div class="flex relative">
						<WeCard
							year="Apr. 2016 - Aug. 2019"
							whom="Sales Manager"
							company="VTB PJSC, Moscow"
							width={700}
						/>
					</div>
					<div class="flex relative items-center justify-center right-1">
						<WeCard
							year="March 2019 - June 2021"
							whom="System administrator"
							company="LLC ''VILDIS Technologies'', Moscow"
							width={900}
						/>
					</div>
					<div class="flex relative items-end justify-end right-12">
						<WeCard
							year="July 2021 - March 2022"
							whom="Deputy of Information Security"
							company="LLC ''VILDIS Technologies'', Moscow"
							width={452}
						/>
					</div>
					<div class="flex relative items-end justify-end">
						<WeCard
							year=" Nov. 2021 - Today"
							whom="Founder and, part-time, financial director"
							company="themCodes OÜ, Tallinn"
							width={500}
						/>
					</div>
				</div>
				<div class="flex">
					<div class="flex pt-5 pb-12"><img src={Line} alt="" /></div>
				</div>
				<div class="flex flex-col gap-y-1 relative">
					<div class="flex relative">
						<WeCardE
							year="Sep. 2012 - Jun. 2018"
							whom="Professional English"
							company="LLC ''Stankevich's House'', Moscow"
							width={300}
						/>
					</div>
					<div class="flex relative items-center justify-center">
						<WeCardE
							year="Sept. 2019 - June 2021"
							whom="Specialist in the Field of Economics and Financial Analytics"
							company="National Research University ''Higher School of Economics'', Moscow"
							width={950}
						/>
					</div>
					<div class="flex gap-5">
						<div class="flex relative">
							<WeCardE
								year="Sept. 2018 - June 2020"
								whom="Specialist in the Field of Social Psychology"
								company="PsychFac ''Moscow State University'' named M. V. Lomonosov, Moscow"
								width={950}
							/>
						</div>
						<div class="flex relative items-end justify-end">
							<WeCardE
								year="Sept. 2020 - Feb. 2022"
								whom="Special Education in the Sphere of Military Economics and Weapon Systems"
								company="46 Central Scientific Research Institute of the 'Ministry of Defense of Russia', Moscow"
								width={898}
							/>
						</div>
					</div>
					<div class="flex relative">
						<WeCardE
							year=" Sept. 2018 - Feb. 2022"
							whom="Bachelor's Degree in Innovation Technologies and Management"
							company="Russian Technological University 'MIREA', Moscow"
							width={1870}
						/>
					</div>
				</div>
			</div>
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
