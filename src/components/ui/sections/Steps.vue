<template>
	<SectionTitle title="Этапы совместной работы" />
	<div class="steps__container">
		<div class="steps__overlay"></div>
		<img class="steps__container-arrow" src="@/assets/step_arrow.svg" alt="">
		<img v-if='!isMobile' class="steps__container-steps" src="@/assets/steps.svg" alt="">
		<img v-if='isMobile' class="steps__container-steps mobile" src="@/assets/steps_mobile.svg" alt="">
	</div>
</template>

<script setup>
import SectionTitle from '../title/SectionTitle.vue';
import { onMounted, computed } from 'vue';
import gsap from 'gsap';

const isMobile = computed(() => window.innerWidth < 768);

onMounted(() => {
  const container = document.querySelector('.steps__container');
  const stepsImage = document.querySelector('.steps__container-steps');
  const overlay = document.querySelector('.steps__overlay');
  const observerOptions = isMobile.value
    ? { threshold: [0.1] } // 10% для мобильной версии
    : { threshold: [0.5] }; // 50% для десктопной версии

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      if (isMobile.value) {
        // Анимация для мобильной версии
        gsap.to(stepsImage, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        // Анимация для десктопной версии
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
      }
      observer.disconnect(); // Отключить наблюдатель после активации анимации
    }
  }, observerOptions);

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
			display: block;
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
			max-width: 1104px;
			width: 100%;
			z-index: 4;
			opacity: 0;
			transition: opacity 0.3s ease;

			&.mobile{
				max-height: 923px;
			}
		}
	}

	&__overlay {
		display: block;
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

@media screen and (max-width: 768px){
	.steps{
		&__container {
			&-arrow {
				display: none;
			}
		}

		&__overlay {
			display: none;
		}
	}
}
</style>