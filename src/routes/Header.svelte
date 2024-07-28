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
	// Leetcode, Codewars, Zalo
</script>

<div class="fixed top-0 z-10 flex h-20 w-full justify-between bg-[#847979]">
	<div class="flex gap-5">
		<div class="flex"></div>
		<div
			class="flex w-20 items-center font-[RHD700] text-xl font-bold uppercase leading-[22px] tracking-widest text-white"
		>
			Konstantin Chirkov
		</div>
		<div class="flex flex-col gap-2 pl-20 pt-1">
			<div class="flex gap-2">
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://github.com/ReD1KC"
				>
					<Fa icon={faGithub} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://stackoverflow.com/users/23368885/red1kc"
				>
					<Fa icon={faStackOverflow} size="lg" />
				</a>
			</div>
			<div class="flex gap-2">
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://t.me/Sammu1L"
				>
					<Fa icon={faTelegram} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://www.facebook.com/profile.php?id=100080508770867"
				>
					<Fa icon={faFacebookSquare} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://wa.me/+37258784686"
				>
					<Fa icon={faWhatsappSquare} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="mailto:tchirkokwork@gmail.com"
				>
					<Fa icon={faEnvelope} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/"
				>
					<Fa icon={faLinkedin} size="lg" />
				</a>
				<a
					class="a flex hover:text-[orange] transition-colors duration-300"
					href="https://www.instagram.com/chir_kov.k/"
				>
					<Fa icon={faInstagramSquare} size="lg" />
				</a>
			</div>
		</div>
	</div>
	<div class="flex"></div>
	<div class="flex items-center gap-8">
		<div class="flex">
			<a
				class="font-[RHD700] uppercase text-white hover:text-[orange] transition-colors duration-300"
				href="#Me">Me</a
			>
		</div>
		<div class="flex">
			<a
				class="font-[RHD700] uppercase text-white hover:text-[orange] transition-colors duration-300"
				href="#Mainactivity">Main Activity</a
			>
		</div>
		<div class="flex">
			<a
				class="font-[RHD700] uppercase text-white hover:text-[orange] transition-colors duration-300"
				href="#WorkEducation">Road Map</a
			>
		</div>
		<div class="flex">
			<a
				class="font-[RHD700] uppercase text-white hover:text-[orange] transition-colors duration-300"
				href="#Skills">Skills</a
			>
		</div>
		<div class="flex">
			<a
				class="font-[RHD700] uppercase text-white hover:text-[orange] transition-colors duration-300"
				href="#Feedback">Feedback</a
			>
		</div>

		<div class="fle rounded-[30px]">
			<button class="button-55 px-5 py-3 font-[RHD700] uppercase text-white">Contact Me</button>
		</div>
		<div class="flex font-[RHD700] uppercase text-white"></div>
	</div>
</div>

<style>
	.a {
		box-shadow:
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		padding: 5px;
		border-radius: 10px;
	}
	.a:hover {
		box-shadow:
			rgba(50, 50, 93, 0) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}

	.button-55 {
		align-self: center;
		background-color: #fff;
		background-image: none;
		background-position: 0 90%;
		background-repeat: repeat no-repeat;
		background-size: 4px;
		border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
		border-style: solid;
		border-width: 2px;
		box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
		box-sizing: border-box;
		color: #41403e;
		cursor: pointer;
		display: inline-block;
		font-size: 1rem;
		line-height: 23px;
		outline: none;
		padding: 0.75rem;
		text-decoration: none;
		transition: all 235ms ease-in-out;
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-55:hover {
		box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
		transform: translate3d(0, 2px, 0);
	}

	.button-55:focus {
		box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
	}
</style>
