<script lang="ts">
	import { faTelegram } from '@fortawesome/free-brands-svg-icons';
	import { faFile } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let file;
	export let text: string;
</script>

<div class="flex gap-10 pl-10">
	<a
		href={file}
		download
		class="fony-[M500] flex items-center justify-center p-5 text-base text-white"
	>
		<Fa icon={faFile} size="lg" />
	</a>
	<div class="fony-[M500] flex items-end justify-end p-5 text-xl text-white">- {text}</div>
</div>

<style></style>
