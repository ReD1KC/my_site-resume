<script lang="ts">
	export let href: string;
	export let duties: string[] = [];
	export let technology: string[] = [];
	export let images: string[] = [];
</script>

<div class="flex w-full pl-6 justify-between">
	<div class="flex w-full flex-col">
		<div class="flex w-full flex-col p-10 text-white">
			Project href: <a {href} class="text-xl text-blue" target="_blank" rel="noopener noreferrer">
				{href}
			</a>
		</div>
		<!-- <div class="flex p-10">
			{#if images.length > 0}
				<div class="flex flex-wrap gap-4">
					{#each images as image}
						<img src={image} alt="Project image" class="w-32 h-32 object-cover" />
					{/each}
				</div>
			{:else}
				<div class="text-white">No images available</div>
			{/if}
		</div> -->
		<div class="flex p-10">
			<div class="text-white">
				<div class="pb-10">
					<div class="pb-3">My duties:</div>
					<ul class="pl-10 list-disc">
						{#each duties as duty}
							<li>{duty}</li>
						{/each}
					</ul>
				</div>
				<div class="pb-10">
					<div class="pb-3">Technologies used:</div>
					<ul class="pl-10 list-disc">
						{#each technology as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
=
</div>

<style></style>
