<script lang="ts">
	export let text: string;
	export let name: string;
</script>

<div class="flex flex-col gap-y-5 border-2 rounded-[15px]">
	<div class="flex text-white fony-[M500] text-[15px] p-5">{text}</div>
	<div class="flex text-white fony-[M500] text-[10px] items-end justify-end p-5">{name}</div>
</div>

<style></style>
