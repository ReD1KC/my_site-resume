<script>
	import cw from '../assets/images/codewars.svg';
	import gh from '../assets/images/github.svg';
	import em from '../assets/images/email.svg';
	import lk from '../assets/images/linkedin.svg';
</script>

<div class="flex bg-[#847979] w-full h-20 left-0 top-0 fixed justify-between z-10">
	<div class="flex gap-5">
		<div class="flex"></div>
		<div
			class="flex w-20 font-[RHD700] text-xl font-bold leading-[22px] items-center tracking-widest uppercase text-white"
		>
			Konstantin Chirkov
		</div>
		<div class="flex w-56 pl-20 gap-2">
			<div class="flex gap-2">
				<a class="flex" href="https://www.codewars.com/users/ReD1KC"><img src={cw} alt="" /></a>
				<a class="flex" href="https://github.com/ReD1KC"><img src={gh} alt="" /></a>
			</div>
			<div class="flex gap-2">
				<a class="flex" href="mailto:tchirkokwork@gmail.com"><img src={em} alt="" /></a>
				<a class="flex" href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/"
					><img src={lk} alt="" /></a
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
		<div class="flex bg-[#ED455D] rounded-[30px]">
			<button class="py-3 px-5 font-[RHD700] text-white uppercase">Contact Me</button>
		</div>
		<div class="flex font-[RHD700] text-white uppercase"></div>
	</div>
</div>
