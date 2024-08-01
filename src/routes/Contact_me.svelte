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

		// Validate contact
		if (!contact) {
			errors.contact = 'Contact is required';
			valid = false;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contact)) {
			errors.contact = 'Invalid email address';
			valid = false;
		} else {
			errors.contact = '';
		}

		// Validate message
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
			// Handle form submission
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
				<label for="name" class="text-white">Name</label>
				<input type="text" id="name" class="p-2 rounded-xl" placeholder="John" bind:value={name} />
				{#if errors.name}
					<span class="text-red-500">{errors.name}</span>
				{/if}

				<label for="contact" class="text-white">Your email</label>
				<input
					type="text"
					id="contact"
					class="p-2 rounded-xl"
					placeholder="example@gmail.com"
					bind:value={contact}
				/>
				{#if errors.contact}
					<span class="text-red-500">{errors.contact}</span>
				{/if}

				<label for="message" class="text-white">Message</label>
				<textarea
					id="message"
					class="p-2 rounded-xl"
					placeholder="Your Message"
					bind:value={message}
				></textarea>
				{#if errors.message}
					<span class="text-red-500">{errors.message}</span>
				{/if}

				<button type="submit" class="mt-4 p-2 bg-orange-500 text-white rounded"> Send </button>
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
</style>
