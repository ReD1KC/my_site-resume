<script>
	import cw from '../assets/images/codewars.svg';
	import gh from '../assets/images/github.svg';
	import wt from '../assets/images/whatsapp.svg';
	import em from '../assets/images/email.svg';
	import lk from '../assets/images/linkedin.svg';
</script>

<div class="flex bg-[#847979] w-full h-20 left-0 top-0 fixed justify-between">
	<div class="flex gap-5">
		<div class="flex"></div>
		<div
			class="flex w-20 font-[RHD] font-bold leading-[22px] items-center tracking-widest uppercase text-white"
		>
			Konstantin Chirkov
		</div>
		<div class="flex flex-wrap gap-0 pl-10">
			<div class="flex w-full justify-between">
				<a class="flex" href=""><img src={cw} alt="" /></a>
				<a class="flex" href=""><img src={gh} alt="" /></a>
				<a class="flex" href=""><img src={wt} alt="" /></a>
			</div>
			<div class="flex w-full justify-between">
				<a class="flex" href=""><img src={em} alt="" /></a>
				<a class="flex" href=""><img src={lk} alt="" /></a>
				<a class="flex" href=""><img src={lk} alt="" /></a>
			</div>
		</div>
	</div>
	<div class="flex"></div>
	<div class="flex items-center gap-8">
		<div class="flex"><a class="font-[RHD] text-white uppercase">Me</a></div>
		<div class="flex"><a class="font-[RHD] text-white uppercase">Road Map</a></div>
		<div class="flex"><a class="font-[RHD] text-white uppercase">Skills</a></div>
		<div class="flex"><a class="font-[RHD] text-white uppercase">Feedback</a></div>
		<div class="flex bg-[red] rounded-[10px]">
			<button class="p-2 font-[RHD] text-white uppercase">Contact Me</button>
		</div>
		<div class="flex font-[RHD] text-white uppercase"></div>
	</div>
</div>
