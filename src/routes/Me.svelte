<script lang="ts">
	import me from '../assets/images/me.png';
	let mainText: string =
		'Nice to meet you. I am an experienced software developer with 2+ years of experience in enterprise development. Specializing in TypeScript/React/Next.js to build robust and scalable applications. Currently working on product development with my team. I have solid experience developing neural networks in Python and working with C#. I also have experience in system administration to effectively manage and maintain IT infrastructure. In the past, I have served as Executive Vice President of Financial Analytics and have experience managing my team.';
</script>

<div class="flex flex-col gap-y-24 w-full">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<h1 class="flex text-white font-[RHD700] pt-28">Software Engineer</h1>
	</div>
	<div class="flex w-full justify-between pt-16">
		<div class="flex flex-col text-white w-1/2">
			<div class=" font-[M900]">Hello! My name is Konstantin Chirkov.</div>
			<div class="leading-[170.2%] pt-5 font-[M500]">{mainText}</div>
		</div>
		<!-- <div class="flex text-white h-[200px] pl-10"><img src={me} alt="" /></div> -->
	</div>
</div>
