<script lang="ts">
	import me from '../assets/images/me.png';
	let mainText: string =
		'Here you can find out all information about me and my professional skills.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nunc eu arcu iaculis semper. Fusce quis odio auctor, porta sem id, fringilla urna. Nunc enim est, suscipit a euismod in, sodales et tortor. Duis ut commodo velit, quis ultricies nulla. Fusce consequat, neque id convallis condimentum, est augue placerat augue, non convallis purus orci id ipsum. Cras placerat, nulla ut maximus scelerisque, lorem nisi tempor ante, et commodo eros lorem a massa. Morbi facilisis nunc id elit blandit, vel aliquet ipsum consectetur. Proin suscipit vulputate mi. Nunc feugiat dictum enim quis egestas. Vivamus eu aliquet lectus. Quisque vulputate rhoncus sem. Nulla facilisi. Aliquam ornare sapien magna, eu pellentesque arcu mattis non. In hac habitasse platea dictumst. Aenean blandit augue et enim faucibus, eget commodo metus malesuada. Nunc fringilla justo sapien, laoreet vehicula massa consectetur sit amet. Vivamus aliquet magna justo, ullamcorper semper sapien elementum a. Sed eu ornare ipsum. Proin suscipit rhoncus orci et venenatis';
</script>

<div class="flex flex-col gap-y-24">
	<div class="flex items-center justify-center text-5xl leading-[64px] text-center text-white">
		<h1 class="flex text-white font-[RHD700] pt-28">Fullstack Developer</h1>
	</div>
	<div class="flex w-full justify-between pt-16">
		<div class="flex flex-col text-white w-1/2">
			<div class=" font-[M900]">Hello! My name is Konstantin Chirkov.</div>
			<div class="leading-[170.2%] pt-5 font-[M500]">{mainText}</div>
		</div>
		<!-- <div class="flex text-white h-[200px] pl-10"><img src={me} alt="" /></div> -->
	</div>
</div>
