<template>
	<SectionTitle title='Наша работа - ваше развитие' />
	<div class="work-content">
		<img
			src="@/assets/slide_img/pc.svg"
			alt=""
			class="work-content__img-pc"
		/>
		<img
			src="@/assets/slide_img/code.svg"
			alt=""
			class="work-content__img-code"
		/>
		<img
			src="@/assets/slide_img/mobile.svg"
			alt=""
			class="work-content__img-mobile"
		/>
		<img
			src="@/assets/slide_img/text.svg"
			alt=""
			class="work-content__img-text"
		/>
		<img
			src="@/assets/slide_img/circle.svg"
			alt=""
			class="work-content__img-circle"
		/>
		<div class='work__additional'>
			<button class="work__additional-button">
				<img src="@/assets/plus.svg" alt="">
			</button>
			<div class="work__additional-content">
				<p class="work__additional-content_text">
				Всем привет я текст. Как дела? блок 1
				</p>
			</div>
		</div>
		<div class='work__additional'>
			<button class="work__additional-button">
				<img src="@/assets/plus.svg" alt="">
			</button>
			<div class="work__additional-content">
				<p class="work__additional-content_text">
				Всем привет я текст. Как дела? блок 2
				</p>
			</div>
		</div>
		<div class='work__additional'>
			<button class="work__additional-button">
				<img src="@/assets/plus.svg" alt="">
			</button>
			<div class="work__additional-content">
				<p class="work__additional-content_text">
				Всем привет я текст. Как дела? блок 3
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import SectionTitle from '../title/SectionTitle.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Регистрация ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

  const animations = [
    {
      selector: '.work-content__img-code',
      from: { right: '10%', top: '10%' },
      to: { right: '18%', top: '16%' },
      start: 'top 70%',
      end: 'center 60%',
      duration: 2,
    },
    {
      selector: '.work-content__img-mobile',
      from: { bottom: '2%', left: '14%' },
      to: { bottom: '8%', left: '20%' },
      start: 'top center',
      end: 'center 60%',
      duration: 2,
    },
    {
      selector: '.work-content__img-text',
      from: { left: '10%', top: '9%' },
      to: { left: '15%', top: '14%' }, 
      start: 'top 70%',
      end: 'center 60%',
      duration: 2,
    },
  ];

  animations.forEach(({ selector, from, to, start, end, duration }) => {
    gsap.to(selector, {
      ...to,
      duration,
      ease: 'none',
      scrollTrigger: {
        trigger: '.work-content',
        start,
        end,
        scrub: true,
      },
    });
  });
});
</script>

<style lang="scss" scoped>
.work {

&-content {
	position: relative;
	margin: 0 auto;
	max-width: 780px;
	display: flex;
	justify-content: center;

	&__img {
		&-pc {
			z-index: 5;
			max-height: 85vh;
		}

		&-code {
			position: absolute;
			z-index: 1;
			right: 10%;
			top: 10%;
			width: 20%;
			transition: none;
		}

		&-mobile {
			position: absolute;
			bottom: 2%;
			left: 14%;
			width: 45%;
		}

		&-text {
			position: absolute;
			top: 9%;
			left: 10%;
			width: 20%;
		}

		&-circle {
			position: absolute;
			bottom: 0;
			max-height: 594px;
			height: 85vh;
		}
	}
}

&__additional{
	position: absolute;
	z-index: 10;

	&:nth-of-type(1){
		top: 16%;
		left: 16%;

		& .work__additional-content{
			top: -50px;
			left: -305px;
		}
	}

	&:nth-of-type(2){
		top: 44%;
		left: 80%;

		& .work__additional-content{
			top: -50px;
			left: 55px;
		}
	}

	&:nth-of-type(3){
		top: 70%;
		left: 28%;

		& .work__additional-content{
			top: -50px;
			left: -305px;
		}
	}

	&-button{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: $color-primary;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s;

		& img{
			width: 40px;
			height: 40px;
		}

		&:hover{
			transform: translateY(-2px) rotate(180deg);
		}
	}

	&-content{
		padding: 12px;
		background-color: $color-white;
		border-radius: 10px;
		position: absolute;
		box-shadow: $shadow;
		width: max-content;
		max-width: 300px;


		&_text{
			font-size: 16px;
			line-height: 27px;
		}
	}
}
}
</style>