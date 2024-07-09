<script>
	import SkillCard from './small_components/Cards/SkillCard.svelte';
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<h1 class="flex text-white font-[RHD600]">
			Main <span class="text-[orange] pl-3">Activity</span>
		</h1>
	</div>
	<div class="flex gap-24">
		<div class="flex flex-col w-1/2">
			<SkillCard
				title="Frontend-developer"
				skills={[
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust'
				]}
			/>
			<SkillCard
				title="Financial Analytic"
				skills={[
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust'
				]}
			/>
		</div>
		<div class="flex flex-col w-1/2">
			<SkillCard
				title="Backend-developer"
				skills={[
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust'
				]}
			/>
			<SkillCard
				title="Managment"
				skills={[
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust',
					'experienced in using cutting-age programming languages such as C Sharp, React, React Native, Rust'
				]}
			/>
		</div>
	</div>
</div>
