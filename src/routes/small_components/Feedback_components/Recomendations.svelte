<script>
	import Certificate from './Certificate.svelte';
</script>

<div class="flex w-full">
	<div class="flex flex-col pl-10">
		<Certificate text="Recommendation from" />
		<Certificate text="Recommendation from" />
		<Certificate text="Recommendation from" />
		<Certificate text="My CV 2024" file="src/assets/files/Chirkov_Konstantin_CV.pdf" />
	</div>
	<div class="flex flex-col pl-10">
		<Certificate
			text="Synopsis of scientific article dated 06.08.2021"
			file="src/assets/files/Справк о статье.pdf"
		/>
		<Certificate text="Certificate of education" file="src/assets/files/Справка из МИРЭА.pdf" />
	</div>
</div>
