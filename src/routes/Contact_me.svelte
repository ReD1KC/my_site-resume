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

	let name = '';
	let contact = '';
	let message = '';
	let errors = {
		name: '',
		contact: '',
		message: ''
	};

	function validateForm() {
		let valid = true;

		if (!name) {
			errors.name = 'Name is required';
			valid = false;
		} else {
			errors.name = '';
		}

		if (!contact) {
			errors.contact = 'Contact is required';
			valid = false;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contact)) {
			errors.contact = 'Invalid email address';
			valid = false;
		} else {
			errors.contact = '';
		}

		if (!message) {
			errors.message = 'Message is required';
			valid = false;
		} else {
			errors.message = '';
		}

		return valid;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (validateForm()) {
			console.log('Form submitted', { name, contact, message });
		}
	}
</script>

<div class="flex w-full flex-col gap-y-24">
	<div class="flex items-center justify-center text-center text-5xl leading-10 text-white">
		<div class="flex flex-col items-center justify-center">
			<h1 class="flex font-[RHD600] text-white">
				Contact <span class="pl-3 text-orange">Me</span>
			</h1>
		</div>
	</div>
	<div class="flex">
		<div class="flex w-2/3 flex-col rounded-3xl bg-[#454141] shadow-contactMe p-10">
			<form class="flex flex-col gap-4" on:submit={handleSubmit}>
				<label for="name" class="text-white pl-1 text-xl italic">Name</label>
				<input type="text" id="name" class="p-4 rounded-xl" placeholder="John" bind:value={name} />
				{#if errors.name}
					<span class="text-red-500">{errors.name}</span>
				{/if}

				<label for="contact" class="text-white pl-1 text-xl italic">Your email</label>
				<input
					type="text"
					id="contact"
					class="p-4 rounded-xl"
					placeholder="example@gmail.com"
					bind:value={contact}
				/>
				{#if errors.contact}
					<span class="text-red-500">{errors.contact}</span>
				{/if}

				<label for="message" class="text-white pl-1 text-xl italic">Message</label>
				<textarea
					id="message"
					class="p-4 rounded-xl"
					placeholder="Your Message"
					bind:value={message}
				></textarea>
				{#if errors.message}
					<span class="text-red-500">{errors.message}</span>
				{/if}

				<button type="submit" class="font-[RHD700] button-55 mt-4 p-2 bg-orange-500 text-white rounded"> Send </button>
			</form>
		</div>
		<div class="flex w-1/3 flex-col items-center justify-center">
			<!-- <img src={me} alt="" class="" /> -->
			<div class="flex pt-10 font-[M500] text-lg text-white">
				<h1>You can write me also on these platforms:</h1>
			</div>
			<div class="flex gap-5 pt-5">
				<a class="flex" href="https://t.me/Sammu1L">
					<Fa icon={faTelegram} size="2x" color="#FA8E41" />
				</a>
				<a class="flex" href="https://www.facebook.com/profile.php?id=100080508770867">
					<Fa icon={faFacebookSquare} size="2x" color="#FA8E41" />
				</a>
				<a class="flex" href="https://wa.me/+37258784686">
					<Fa icon={faWhatsappSquare} size="2x" color="#FA8E41" />
				</a>
				<a class="flex" href="https://www.linkedin.com/in/konstantin-chirkov-7554432b3/">
					<Fa icon={faLinkedin} size="2x" color="#FA8E41" />
				</a>
				<a class="flex" href="https://www.instagram.com/chir_kov.k/">
					<Fa icon={faInstagramSquare} size="2x" color="#FA8E41" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	input,
	textarea {
		background: radial-gradient(50% 50% at 50% 50%, #423b3b 2.5%, #393535 100%);
		border: 1px solid #343232;
		border-radius: 16px;
	}

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
