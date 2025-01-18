<template>
	<SectionTitle title="Этапы совместной работы" />
	<div class="steps__container">
		<div class="steps__overlay"></div>
		<img class="steps__container-arrow" src="@/assets/step_arrow.svg" alt="">
		<img class="steps__container-steps" src="@/assets/steps.svg" alt="">
	</div>
</template>

<script setup>
import SectionTitle from '../title/SectionTitle.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
	const container = document.querySelector('.steps__container');
	const stepsImage = document.querySelector('.steps__container-steps');
	const overlay = document.querySelector('.steps__overlay');

	const observer = new IntersectionObserver(
		(entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
				gsap.to(stepsImage, {
					opacity: 1,
					duration: 1,
					onComplete: () => {
						gsap.to(overlay, {
							width: 0,
							duration: 2,
							ease: 'power2.inOut',
							transformOrigin: 'right center',
						});
					},
				});
				observer.disconnect();
			}
		},
		{ threshold: [0.5] }
	);

	if (container) observer.observe(container);
});
</script>


<style lang="scss" scoped>
.steps {
	&__container {
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
		padding-right: 24px;

		&-arrow {
			position: absolute;
			top: -10px;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			max-width: 1145px;
			z-index: 2;
		}

		&-steps {
			position: relative;
			z-index: 4;
			opacity: 0;
			transition: opacity 0.3s ease;
		}
	}

	&__overlay {
		position: absolute;
		top: -10px;
		right: 0; 
		width: 100%;
		max-width: 1185px;
		height: 100%;
		background-color: #fff;
		z-index: 3;
		transform-origin: right center;
	}
}

</style>