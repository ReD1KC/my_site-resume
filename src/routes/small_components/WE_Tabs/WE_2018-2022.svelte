<script>
	import WeCard from '../Cards/WE_Card.svelte';
	import Line from '/home/konstantin/_sd/IT_Projects/my_site-resume/src/assets/images/line.svg';
</script>

<div class="flex flex-col gap-y-10">
	<div class="w-full">
		<div class="flex flex-col gap-y-1 relative">
			<div class="flex relative">
				<WeCard
					year="Apr. 2016 - Aug. 2019"
					whom="Sales Manager"
					company="VTB PJSC, Moscow"
					width={700}
					borderColor="#FA8E41"
				/>
			</div>
			<div class="flex relative items-center justify-center right-1">
				<WeCard
					year="March 2019 - June 2021"
					whom="System administrator"
					company="LLC ''VILDIS Technologies'', Moscow"
					width={900}
					borderColor="#FA8E41"
				/>
			</div>
			<div class="flex relative items-end justify-end right-12">
				<WeCard
					year="July 2021 - March 2022"
					whom="Deputy of Information Security"
					company="LLC ''VILDIS Technologies'', Moscow"
					width={452}
					borderColor="#FA8E41"
				/>
			</div>
			<div class="flex relative items-end justify-end">
				<WeCard
					year=" Nov. 2021 - Today"
					whom="Full-stack Developer"
					company="themCodes OÜ, Tallinn"
					width={500}
					borderColor="#FA8E41"
				/>
			</div>
		</div>
		<div class="flex">
			<div class="flex pt-5 pb-12"><img src={Line} alt="" /></div>
		</div>
		<div class="flex flex-col gap-y-1 relative">
			<div class="flex relative">
				<WeCard
					year="Sep. 2012 - Jun. 2018"
					whom="Professional English"
					company="LLC ''Stankevich's House'', Moscow"
					width={300}
					borderColor="#48B3F2"
				/>
			</div>
			<div class="flex relative items-center justify-center">
				<WeCard
					year="Sept. 2019 - June 2021"
					whom="Specialist in the Field of Economics and Financial Analytics"
					company="National Research University ''Higher School of Economics'', Moscow"
					width={950}
					borderColor="#48B3F2"
				/>
			</div>
			<div class="flex relative">
				<WeCard
					year="Sept. 2018 - June 2020"
					whom="Specialist in the Field of Social Psychology"
					company="PsychFac ''Moscow State University'' named M. V. Lomonosov, Moscow"
					width={950}
					borderColor="#48B3F2"
				/>
			</div>
			<div class="flex relative items-end justify-end">
				<WeCard
					year="Sept. 2020 - Feb. 2022"
					whom="Special Education in the Sphere of Military Economics and Weapon Systems"
					company="46 Central Scientific Research Institute of the 'Ministry of Defense of Russia', Moscow"
					width={893}
					borderColor="#48B3F2"
				/>
			</div>
			<div class="flex relative">
				<WeCard
					year=" Sept. 2018 - Feb. 2022"
					whom="Bachelor's Degree in Innovation Technologies and Management"
					company="Russian Technological University 'MIREA', Moscow"
					width={1870}
					borderColor="#48B3F2"
				/>
			</div>
		</div>
	</div>
</div>

<style></style>
