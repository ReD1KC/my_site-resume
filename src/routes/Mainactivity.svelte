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
					'Wrote mobile applications using Expo/React Native. This allowed for a cross-platform application with high performance and user interface.',
					'Developed websites in Next.js using React, Tailwind CSS and TypeScript. The projects included both client and server side, ensuring high performance and SEO optimisation.',
					'Deployed and maintained applications and their components on a Linux servers.',
					'Managed the back-end data system using Supabase to optimise queries and improve communication between the client and server side of the applications.',
					'Participated in the development and further enhancement of the applications architecture, ensuring its scalability and reliability.',
					'Worked with SCRUM system using tools such as Jira, ClickUp and Trello for project management, facilitating effective teamwork.',
				]}
			/>
		</div>
		<div class="flex w-1/2 flex-col">
			<SkillCard
			title="System Administrator"
			skills={[
				'Maintained the company website, performed preventive maintenance.',
				'Monitored and maintained IT infrastructure. Constant monitoring of server and network status, responding to failures and problems, minimising downtime.',
				'Created a network infrastructure administration system. Managed network devices (routers, switches, access points), controlled and optimised network traffic.',
				'Maintained liaison with external and internal auditors. Supported the audit process by providing necessary information and documents. Worked to resolve identified observations.',
				'Provided training and awareness to employees. Designed and developed information security training for employees, raised their awareness of current threats and methods of protection in the company and developed instruction on software and office equipment.',
			]}
		/>
		</div>
	</div>
</div>
