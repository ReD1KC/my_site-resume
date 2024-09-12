<script>
	import Certificate from './Certificate.svelte';
</script>

<div class="flex w-full">
	<div class="flex flex-col pl-10">
		<Certificate
			text="Recommendation from the Chief Executive Officer of LLC VILDIS Technologies"
			file="src/assets/files/Recomendation from LLC VILDIS Technologies.pdf"
		/>
		<Certificate
			text="Recomendation from the Chief Developer of LLC AiThink"
			file="src/assets/files/Recomendation_AiThink.pdf"
		/>
		<Certificate text="My CV 2024" file="src/assets/files/Chirkov_Konstantin_CV.pdf" />
	</div>
	<div class="flex flex-col pl-10">
		<Certificate
			text="Synopsis of scientific article dated 06.08.2021"
			file="src/assets/files/Synopsis of scientific article dated 06.08.2021.pdf"
		/>
		<Certificate
			text="Certificate of education"
			file="src/assets/files/Certificate of education.pdf"
		/>
	</div>
</div>
