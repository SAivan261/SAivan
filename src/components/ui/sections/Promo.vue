<template>
	<div class="promo">
		<div class="promo__content-wrapper">
			<div class="promo__content-title_container">
				<div class="promo__content-title_container-before"></div>
				<h1 class="promo__content-title">
					<span class="promo__content-title_additional">
						Цифровые решения
					</span>
					<br />
					для вашего бизнеса
					<arrow_ico class="arrow-ico" />
				</h1>
				<p class="promo__content-text">
					Мы помогаем компаниям различного уровня создавать свои цифровые
					продукты должным образом.
				</p>
				<div class="promo__content-title_container-after"></div>
			</div>
			<div class="promo__content-text_container">
				<div class="promo__content-calc_wrapper">
					<div class="promo__content-calc_header">
						<p class="promo__content-calc_title">Рассчитайте стоимость</p>
						<div class="promo__content-calc_num">
							<n-number-animation
								ref="numberAnimationInstRef"
								:from="0"
								:to="699700.699"
								:active="false"
								:precision="0"
								locale="ru-RU"
								show-separator
							/>
							<calculator_ico color="primary" size="28" />
						</div>
					</div>
					<div class="promo__content-calc_list">
						<n-select
							class="promo__content-calc_item"
							placeholder="Тип сайта"
							v-model:value="value"
							:options="options"
						/>
					</div>
					<Button>Оставить заявку</Button>
				</div>
				<div class="promo__content-advantage_container">
					<div class="promo__content-advantage_container-before"></div>
					<div class="promo__content-advantage">
						<h3 class="promo__content-advantage_title">Бюджет</h3>
						<p class="promo__content-advantage_text">
							Наши услуги подходят для любого бюджета, обеспечивая высокое
							качество.
						</p>
					</div>
					<div class="promo__content-advantage">
						<h3 class="promo__content-advantage_title">Сроки</h3>
						<p class="promo__content-advantage_text">
							Мы адаптируемся к вашим срокам для реализации проектов без
							потери качества.
						</p>
					</div>
					<div class="promo__content-advantage_container-after"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '../Button.vue';
import arrow_ico from '@/components/icons/arrow_ico.vue'
import calculator_ico from '@/components/icons/calculator_ico.vue'
import gsap from 'gsap';
import { ref, onMounted } from 'vue'

const value = ref(null)
const options = ref([
	{
		label: "Everybody's Got Something to Hide Except Me and My Monkey",
		value: 'song0',
	},
	{
		label: 'Drive My Car',
		value: 'song1',
	},
	{
		label: 'Norwegian Wood',
		value: 'song2',
	},
])

onMounted(() => {
	const title = document.querySelector('.promo__content-title');
	const arrow = document.querySelector('.arrow-ico');
	const text = document.querySelector('.promo__content-text');
	const textContainer = document.querySelector('.promo__content-calc_wrapper');
	const advantages = document.querySelectorAll('.promo__content-advantage');

	if (title && arrow && text && textContainer && advantages.length > 0) {
		gsap.fromTo(
			title,
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1.5,
				ease: 'power2.out',
			}
		);
		gsap.fromTo(
			text,
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power2.out',
				delay: 0.5,
			}
		);
		gsap.fromTo(
			textContainer,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power2.out',
				delay: 1,
			}
		);
		gsap.fromTo(
			arrow,
			{ opacity: 0, scale: 0.8 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: 'back.out(1.7)',
				delay: 1.5,
			}
		);
		advantages.forEach((advantage, index) => {
			gsap.fromTo(
				advantage,
				{  y: -50, opacity: 0},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'none',
					delay: 0.5 + index * 0.5,
				}
			);
		});
	}
});
</script>

<style lang="scss" scoped>
.promo{
	border-radius: 10px;

	&__content {

		&-wrapper {
			width: 100%;
			height: 85vh;
			max-height: 650px;
			background-image: url('@/assets/bg.webp');
			background-size: cover;
			background-position: top;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 24px;
			border-radius: 10px;
		}

		&-title{
			opacity: 0;
			transform: translateX(-100px);
			transition: all 0.3s ease-out;
		}

		&-text{
			opacity: 0;
			transform: translateX(-100px);
			transition: all 0.3s ease-out;
		}

		&-title_container {
			background-color: $color-white;
			width: fit-content;
			width: 53%;
			border-radius: 10px 0 10px 0;
			padding: 0 24px 24px 24px;
			position: relative;

			&-before {
				position: absolute;
				width: 20px;
				height: 20px;
				bottom: -17px;
				left: 0;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 23px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}

			&-after {
				position: absolute;
				width: 20px;
				height: 20px;
				top: 0px;
				right: -20px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}
		}

		&-title {
			font-size: 52px;
			line-height: 78px;
			font-weight: bold;
		}

		&-title_additional {
			color: $color-white;
			background-color: $color-primary;
			line-height: 42px;
			padding: 0px 32px 8px;
			border-radius: 10px;
		}

		&-text_container {
			display: flex;
			flex-wrap: nowrap;
		}

		&-calc_wrapper {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
			padding: 12px;
			margin: 24px;
			border-radius: 10px;
			background-color: $color-white;
			width: 100%;
		}

		&-calc_header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		&-calc_num {
			display: flex;
			gap: 6px;
			align-items: center;
		}

		&-calc_title {
			font-size: 20px;
		}

		&-calc_list {
			display: flex;
			gap: 12px;
			max-width: 722px;
			width: 100%;
		}

		&-calc_item {
			max-width: 232px;
		}

		&-text {
			font-size: 20px;
			line-height: 30px;
		}

		&-advantage {
			opacity: 0;
			transform: translateY(-50px);
		}

		&-advantage_container {
			margin-left: auto;
			background-color: $color-white;
			padding: 12px;
			border-radius: 10px 0 0 0;
			display: flex;
			gap: 6px;
			position: relative;

			&-before {
				transform: rotate(180deg);
				position: absolute;
				width: 20px;
				height: 20px;
				bottom: 0px;
				left: -20px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}

			&-after {
				transform: rotate(180deg);
				position: absolute;
				width: 20px;
				height: 20px;
				top: -20px;
				right: 0px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}
		}

		&-advantage {
			padding: 12px 0 0 12px;
			background-position: center;
			background-size: cover;
			border-radius: 10px;
			color: $color-white;
			width: 200px;

			&:nth-of-type(2) {
				background-image: url('@/assets/variable_bg-blue.jpg');
			}

			&:nth-of-type(3) {
				background-image: url('@/assets/variable_bg-black.jpg');
			}
		}

		&-advantage_title {
			font-size: 20px;
			line-height: 30px;
		}
	}
}

.arrow-ico {
	transform: translateY(8px) scale(0.8);
	opacity: 0;
	transition: all 0.3s ease-out;
}
</style>