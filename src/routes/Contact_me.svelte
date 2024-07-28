<script>
import Fa from 'svelte-fa';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex w-full flex-col gap-y-24">
	<div class="flex items-center justify-center text-center text-5xl leading-10 text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex font-[RHD600] text-white">
				Contact <snap class="pl-3 text-orange">Me</snap>
			</h1>
		</div>
	</div>
	<div class="flex">
		<div class="flex w-2/3 rounded-3xl bg-[#454141] shadow-contactMe"></div>
		<div class="flex w-1/3 flex-col items-center justify-center">
			<!-- <img src={me} alt="" class="" /> -->
			<div class="flex pt-10 font-[M500] text-lg text-white">
				<h1>You can write me also on these platforms:</h1>
			</div>
			<div class="flex gap-5 pt-5">
				<a class="flex" href="https://t.me/Sammu1L"
					><Fa icon={faTelegram} size="2x" color="#FA8E41" /></a
				>
				<a class="flex" href="https://www.facebook.com/profile.php?id=100080508770867"
					><Fa icon={faFacebookSquare} size="2x" color="#FA8E41" /></a
				>
				<a class="flex" href="https://wa.me/+37258784686">
					<Fa icon={faWhatsappSquare} size="2x" color="#FA8E41" /></a
				>
				<a class="flex" href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/"
					><Fa icon={faLinkedin} size="2x" color="#FA8E41" /></a
				>
				<a class="flex" href="https://www.instagram.com/chir_kov.k/"
					><Fa icon={faInstagramSquare} size="2x" color="#FA8E41" /></a
				>
			</div>
		</div>
	</div>
</div>
