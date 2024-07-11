<script>
	import me from '../assets/images/me.png';
	import gh from '../assets/images/GithubO.svg';
	import wt from '../assets/images/whatsappO.svg';
	import em from '../assets/images/emailO.svg';
	import lk from '../assets/images/LinkedInO.svg';
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex text-white font-[RHD600]">Contact Me</h1>
		</div>
	</div>
	<div class="flex">
		<div
			class="flex w-2/3 shadow-[-9px_-9px_73px_-3px_rgba(147,147,147,0.45),9px_9px_49px_5px_rgba(0,0,0,0.45)] rounded-3xl bg-[#454141]"
		></div>
		<div class="flex w-1/3">
			<div class="flex flex-col">
				<!-- <img src={me} alt="" class="" /> -->
				<div class="flex items-center justify-center pt-10 text-white text-[18px] font-[M500]">
					<h1>You can find me also on these platforms:</h1>
				</div>
				<div class="flex justify-between pt-10 bg w-full pr-24 pl-24">
					<a class="flex" href="https://www.codewars.com/users/ReD1KC"><img src={wt} alt="" /></a>
					<a class="flex" href="https://github.com/ReD1KC"><img src={gh} alt="" /></a>
					<a class="flex" href="mailto:tchirkokwork@gmail.com"><img src={em} alt="" /></a>
					<a class="flex" href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/"
						><img src={lk} alt="" /></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
