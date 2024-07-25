<script>
	import SkillCard from './small_components/Cards/SkillCard.svelte';
</script>

<div class="flex flex-col gap-y-24 w-full">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<h1 class="flex text-white font-[RHD600]">
			Main <span class="text-[orange] pl-3">Activity</span>
		</h1>
	</div>
	<div class="flex gap-24">
		<div class="flex flex-col w-1/2">
			<SkillCard
				title="Frontend-developer"
				skills={[
					'Wrote part of the product mobile app on Expo (React Native).',
					'Wrote the main website of product in Next.js (React / Tailwind CSS/TypeScript).',
					'Developed several elements of the site in Svelte.'
				]}
			/>
			<SkillCard
				title="System Administration"
				skills={[
					'Created a network infrastructure administration system. Managed network devices (routers, switches, access points), monitoring and optimizing network traffic.',
					'Monitored and maintained IT infrastructures. Continuous monitoring of server and network status, responding to failures and problems, minimizing downtime.'
				]}
			/>
		</div>
		<div class="flex flex-col w-1/2">
			<SkillCard
				title="Backend-developer"
				skills={[
					'Wrote a neural network for the backend of the application in Python.',
					'Used C# to write internal application scripts and their interaction logic to improve application performance.',
					'Deployed and maintained the application and its components on a Linux server (PM2).',
					'Managed the back-end data system on GraphQl.'
				]}
			/>
			<SkillCard
				title="Managment"
				skills={[
					'Assembled and managed a small team of analysts. I also set tasks, mentored and developed the professional skills of my team. Improved the companys financial performance and reporting system.',
					'Liaised with external and internal auditors. Supported the audit process, providing necessary information and documents. Worked on the elimination of identified observations.',
					'Trained and raised awareness of employees. Developed and developed information security training for employees, raised their awareness of modern threats and methods of protection in the company.'
				]}
			/>
		</div>
	</div>
</div>
