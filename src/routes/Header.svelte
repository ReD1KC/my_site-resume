<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faTelegram } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex bg-[#847979] w-full h-20 left-0 top-0 fixed justify-between z-10">
	<div class="flex gap-5">
		<div class="flex"></div>
		<div
			class="flex w-20 font-[RHD700] text-xl font-bold leading-[22px] items-center tracking-widest uppercase text-white"
		>
			Konstantin Chirkov
		</div>
		<div class="flex flex-wrap pt-5 pl-16 gap-2">
			<div class="flex gap-2">
				<a class="flex" href="https://t.me/Sammu1L"><Fa icon={faTelegram} size="lg" /></a>
				<a class="flex" href="https://github.com/ReD1KC"><Fa icon={faGithub} size="lg" /></a>
			</div>
			<div class="flex gap-2">
				<a class="flex" href="mailto:tchirkokwork@gmail.com"><Fa icon={faEnvelope} size="lg" /></a>
				<a class="flex" href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/"
					><Fa icon={faLinkedin} size="lg" /></a
				>
			</div>
		</div>
	</div>
	<div class="flex"></div>
	<div class="flex items-center gap-8">
		<div class="flex"><a class="font-[RHD700] text-white uppercase" href="#Me">Me</a></div>
		<div class="flex">
			<a class="font-[RHD700] text-white uppercase" href="#Mainactivity">Main Activity</a>
		</div>
		<div class="flex">
			<a class="font-[RHD700] text-white uppercase" href="#WorkEducation">Road Map</a>
		</div>
		<div class="flex"><a class="font-[RHD700] text-white uppercase" href="#Skills">Skills</a></div>
		<div class="flex">
			<a class="font-[RHD700] text-white uppercase" href="#Feedback">Feedback</a>
		</div>
		<div class="flex bg-orange rounded-[30px]">
			<button class="py-3 px-5 font-[RHD700] text-white uppercase">Contact Me</button>
		</div>
		<div class="flex font-[RHD700] text-white uppercase"></div>
	</div>
</div>
