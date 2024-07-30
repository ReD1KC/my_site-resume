<script>
	import SkillCard from './small_components/Cards/SkillCard.svelte';
</script>

<div class="flex w-full flex-col gap-y-24">
	<div class="flex items-center justify-center text-center text-5xl leading-[64px] text-white">
		<h1 class="flex font-[RHD600] text-white">
			Main <span class="pl-3 text-[orange]">Activity</span>
		</h1>
	</div>
	<div class="flex gap-24">
		<div class="flex w-1/2 flex-col">
			<SkillCard
				title="Frontend-developer"
				skills={[
					'Mobile Application Development: Wrote a key part of a mobile application for a product using Expo and React Native. This resulted in a cross-platform application with high performance and a great user experience.',
					'Website Development: Developed websites in Next.js using React, Tailwind CSS and TypeScript. The projects included both client and server side, ensuring high performance and SEO optimisation.',
					'Svelte Components: Developed several components for the website using Svelte, achieving high performance and user interface interactivity.'
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
		<div class="flex w-1/2 flex-col">
			<SkillCard
				title="Backend-developer"
				skills={[
					'Neural Network: Wrote a neural network in Python for the backend of the application that processed and analysed data, ensuring high accuracy and processing speed.',
					'C# scripts: Used C# to write the backend scripts for the application and develop the logic for their interaction, which greatly improved the overall performance and efficiency of the application.',
					'Deployment and Support: Deployed and supported the application and its components on a Linux server using PM2. This ensured stable operation of the application and its components.',
					'GraphQL: Managed the back-end data system using GraphQL to optimise queries and improve communication between the client and server parts of the application.'
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
