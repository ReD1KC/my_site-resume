<script>
	import ContactMe from './Contact_me.svelte';
	import Feedback from './Feedback.svelte';
	import Mainactivity from './Mainactivity.svelte';
	import Me from './Me.svelte';
	import Skills from './Skills.svelte';
	import WorkEducation from './Work_Education.svelte';
</script>

<main class="flex flex-col bg-[#222427] h-full w-full pr-5 pl-5 gap-y-44">
	<div id="Me"><Me /></div>
	<div id="Mainactivity"><Mainactivity /></div>
	<div id="WorkEducation"><WorkEducation /></div>
	<div id="Skills"><Skills /></div>
	<div id="Feedback"><Feedback /></div>
	<div id="ContactMe "><ContactMe /></div>
</main>
