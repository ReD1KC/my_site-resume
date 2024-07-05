<script>
	let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	let currentIndex = 0;

	function prev() {
		currentIndex -= 1;
		if (currentIndex < 0) {
			currentIndex = items.length - 1;
		}
		updateCarousel();
	}

	function next() {
		currentIndex += 1;
		if (currentIndex >= items.length) {
			currentIndex = 0;
		}
		updateCarousel();
	}

	function updateCarousel() {
		const carouselInner = document.querySelector('.carousel-inner');
		// @ts-ignore
		carouselInner.style.transform = `translateX(${currentIndex * -100}px)`;
	}
</script>

<div class="carousel bg-white">
	<div class="carousel-inner">
		{#each items as item}
			<div class="carousel-item">{item}</div>
		{/each}
	</div>
	<button class="carousel-prev" on:click={prev}>‹</button>
	<button class="carousel-next" on:click={next}>›</button>
</div>

<style>
	.carousel {
		position: relative;
		overflow: hidden;
	}

	.carousel-inner {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	.carousel-item {
		flex: 0 0 100px; /* ширина каждого элемента */
		margin: 10px;
	}

	.carousel-prev,
	.carousel-next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}

	.carousel-prev {
		left: 10px;
	}

	.carousel-next {
		right: 10px;
	}
</style>
