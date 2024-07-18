<script lang="ts">
	import { fade } from 'svelte/transition';
	import ContactMe from './Contact_me.svelte';
	import Feedback from './Feedback.svelte';
	import Mainactivity from './Mainactivity.svelte';
	import Me from './Me.svelte';
	import Skills from './Skills.svelte';
	import Test from './Test.svelte';
	import WorkEducation from './Work_Education.svelte';
	import Saos from 'saos';
</script>

<main class="flex flex-col bg-[#222427] h-full w-full px-5 gap-y-44">
	<Saos><div in:fade={{ duration: 1200 }} class="flex pb-24" id="Me"><Me /></div></Saos>
	<Saos
		><div in:fade={{ duration: 1200 }} class="flex" id="Mainactivity"><Mainactivity /></div></Saos
	>
	<Saos
		><div in:fade={{ duration: 1200 }} class="flex" id="WorkEducation"><WorkEducation /></div></Saos
	>
	<Saos><div in:fade={{ duration: 1200 }} class="flex" id="Skills"><Skills /></div></Saos>
	<Saos><div in:fade={{ duration: 1200 }} class="flex" id="Feedback"><Feedback /></div></Saos>
	<Saos><div in:fade={{ duration: 1200 }} class="flex" id="ContactMe"><ContactMe /></div></Saos>
	<div><Test /></div>
</main>
