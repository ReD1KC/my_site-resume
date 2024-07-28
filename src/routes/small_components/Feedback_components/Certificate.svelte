<script lang="ts">
export let file;
export let text: string;
</script>

<div class="flex gap-10 pl-10">
	<div class="fony-[M500] flex items-center justify-center p-5 text-base text-white">{file}</div>
	<div class="fony-[M500] flex items-end justify-end p-5 text-xs text-white">- {text}</div>
</div>

<style></style>
