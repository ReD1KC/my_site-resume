<script lang="ts">
export let text: string;
export let name: string;
</script>

<div class="ml-10 flex flex-col gap-y-5 rounded-[15px] border-2">
	<div class="fony-[M500] flex p-5 text-[15px] text-white">{text}</div>
	<div class="fony-[M500] flex items-end justify-end p-5 text-[10px] text-white">{name}</div>
</div>

<style></style>
