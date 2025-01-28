<template>
	<div class="promo">
		<div class="promo__content-wrapper">
			<div class="promo__content-title_container">
				<div class="promo__content-title_container-before"></div>
				<h1 class="promo__content-title">
					<span class="promo__content-title_additional">
						Цифровые&nbsp;решения
					</span>
					<br />
					для вашего бизнеса
					<arrow_ico class="arrow-ico" :size='IconArrow'/>
				</h1>
				<p class="promo__content-text">
					Мы помогаем компаниям различного уровня создавать свои цифровые
					продукты должным образом.
				</p>
				<div class="promo__content-title_container-after"></div>
			</div>
			<div class="promo__content-text_container">
				<div 
				class='promo__content-calc_wrapper'
				:class="isTablet ? 'mobile' : ''">
					<div class="promo__content-calc_header">
						<p class="promo__content-calc_title">Узнайте&nbsp;стоимость вашего&nbsp;сайта</p>
						<div class="promo__content-calc_num">
							от
							<n-number-animation
								ref="numberAnimationInstRef"
								:from="0"
								:to="selectedPrice"
								:active="true"
								:precision="0"
								locale="ru-RU"
								show-separator
							/>
							₽
							<calculator_ico color="primary" size="28" />
						</div>
					</div>
					<div class="promo__content-calc_list">
						<n-select
							class="promo__content-calc_item"
							placeholder="Тип сайта"
							v-model:value="selectedType"
							:options="options"
							@update:value="updatePrice"
						/>
					</div>
					<Button @click='toContact'>Обсудить проект</Button>
				</div>
				<div 
				class="promo__content-advantage_container"
				:class="isTablet ? 'mobile' : ''">
					<div class="promo__content-advantage_container-before"></div>
					<div class="promo__content-advantage">
						<h3 class="promo__content-advantage_title">Гибкие цены	</h3>
						<p class="promo__content-advantage_text">
							Мы предлагаем решения для любого бюджета, не жертвуя качеством и функциональностью.
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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';

const value = ref(null)
const router = useRouter()

const toContact = () => {
	router.push('/contact')
}

const IconArrow = computed(() => {
  if (window.innerWidth < 450) {
    return 30;
  } else if (window.innerWidth < 600) {
    return 45;
  } else {
    return 60;
  }
});


const isTablet = computed(() => {
	if(window.innerWidth < 815){
		return true
	} else{
		return false
	}
})

const options = [
  { label: 'Лендинг (одностраничный сайт)', value: 'landing', price: 29900 },
  { label: 'Корпоративный сайт', value: 'corporate', price: 49900 },
  { label: 'Интернет-магазин', value: 'ecommerce', price: 79900 },
  { label: 'Многофункциональный портал', value: 'portal', price: 49900 },
  { label: 'Сайт-визитка', value: 'business_card', price: 19900 },
  { label: 'Блог', value: 'blog', price: 24900 },
  { label: 'Новостной портал', value: 'news', price: 39900 },
  { label: 'Образовательная платформа', value: 'education', price: 69900 },
  { label: 'Форум', value: 'forum', price: 34900 },
  { label: 'Сайт для мероприятий', value: 'event', price: 29900 },
  { label: 'Каталог товаров', value: 'catalog', price: 45900 },
];


const selectedType = ref(null);
const selectedPrice = ref(0);

function updatePrice(type) {
	const selectedOption = options.find(option => option.value === type);
	selectedPrice.value = selectedOption ? selectedOption.price : 0;
}

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
			max-width: 665px;
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
			white-space: nowrap;
		}

		&-title_additional {
			color: $color-white;
			background-color: $color-primary;
			line-height: 42px;
			padding: 0px 32px 8px;
			border-radius: 10px;
			white-space: nowrap;
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

			&.mobile{
				min-width: 500px;
			}
		}

		&-calc_header {
			display: flex;
			gap: 4px;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		&-calc_num {
			display: flex;
			gap: 2px;
			align-items: center;
			white-space: nowrap;
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
			max-width: 336px;
		}

		&-text {
			font-size: 20px;
			line-height: 30px;
		}

		&-advantage_container {
			margin-left: auto;
			background-color: $color-white;
			padding: 12px;
			border-radius: 10px 0 0 0;
			display: flex;
			gap: 6px;
			position: relative;

			
			&.mobile{
				margin: 0;
				width: 100%;
				border-radius: 0;

				& .promo__content-advantage_container-before {
				transform: rotate(270deg);
				position: absolute;
				width: 20px;
				height: 20px;
				top: -20px;
				left: 0px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
				}

				& .promo__content-advantage{
					width: auto;
					padding: 12px;

					&_title{
						font-size: 18px;
					}

					&_text{
						font-size: 16px;
					}
				}
			}

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
			padding: 12px;
			background-position: center;
			background-size: cover;
			border-radius: 10px;
			color: $color-white;
			width: 200px;
			opacity: 0;
			transform: translateY(0px);

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

@media screen and (max-width: 1280px){
	.promo{
		&__content{
			&-title_container{
				max-width: 605px;
			}

			&-title{
				font-size: 48px;
			}

			&-text{
				font-size: 18px;
				line-height: 24px;
			}
		}
	}
}

@media screen and (max-width: 1024px){
	.promo{
		&__content{
			&-wrapper{
				height: auto;
			}

			&-calc_wrapper{
				margin: 0 24px 24px 24px;
			}

			&-calc_title{
				font-size: 18px;
			}

			&-advantage_title{
				font-size: 18px;
			}
		}
	}
}

@media screen and (max-width: 815px){
	.promo__content-text_container {
		flex-wrap: wrap;
	}
}

@media screen and (max-width: 768px){
	.promo{
		&__content{
			&-title_container{
				max-width: 100%;
				border-radius: 0;

				&-after {
					top: initial;
					bottom: -20px;
					right: 0px;
					transform: rotate(90deg);
				}
			}

			&-calc_wrapper {

				&.mobile{
					min-width: auto;
				}
			}

			&-advantage{
				min-width: 200px;
			}

			&-advantage_container {
				gap: 12px;
			}
		}
	}
}

@media screen and (max-width: 500px){
	.promo{
		&__content{
			&-advantage_container{
				flex-wrap: wrap;
			}
		}
	}
}

@media screen and (max-width: 600px) {
  .promo__content-title {
    font-size: clamp(28px, 7vw, 48px);
		line-height: 2;
  }
}

@media screen and (max-width: 450px) {
  .promo__content-title {
    font-size: clamp(24px, 6vw, 48px);
		line-height: 2;
  }

	.promo__content-title_container{
		padding: 0 12px 12px 12px;
	}

	.promo__content-text[data-v-5bf7021c] {
		font-size: 14px;
		line-height: 20px;
	}

	.promo__content-calc_title {
		font-size: 14px;
	}

	.promo__content{
		&-advantage_container {
			&.mobile{

				& .promo__content-advantage{

					&_title{
						font-size: 16px;
					}

					&_text{
						font-size: 14px;
					}
				}
			}
		}
	}

	.promo__content-calc_num{
		font-size: 14px;
	}

	.promo__content-calc_item{
		max-width: 100%;
	}
}
</style>