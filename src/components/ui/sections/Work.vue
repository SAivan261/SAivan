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
		<div
			v-for="(block, index) in blocks"
			:key="index"
			class="work__additional"
		>
			<button
				@click="toggleShow(index)"
				class="work__additional-button"
				:class="{ active: block.visible }"
			>
				<img src="@/assets/plus.svg" alt="" />
			</button>
			<transition
				:name="index === 1 ? 'contentReverse' : 'content'"
			>
				<div
					v-if="block.visible"
					class="work__additional-content"
				>
					<p class="work__additional-content_text">
						{{ block.text }}
					</p>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
import SectionTitle from '../title/SectionTitle.vue';
import { onMounted, reactive } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blocks = reactive([
  { visible: false, text: 'Типографика и колористика в стиле вашего бренда' },
  { visible: false, text: 'Быстрая работа и стабильность сайта' },
  { visible: false, text: 'Удобство и красота на любых устройствах' },
]);

const toggleShow = (index) => {
  blocks[index].visible = !blocks[index].visible;
};

const animations = [
  {
    selector: '.work-content__img-code',
    from: { right: '10%', top: '10%'},
    to: { right: '18%', top: '16%'},
    start: 'top 70%',
    end: 'center 60%',
    duration: 4,
  },
  {
    selector: '.work-content__img-mobile',
    from: { bottom: '2%', left: '14%' },
    to: { bottom: '8%', left: '20%'},
    start: 'top center',
    end: 'center 60%',
    duration: 4,
  },
  {
    selector: '.work-content__img-text',
    from: { left: '10%', top: '9%'},
    to: { left: '15%', top: '14%'},
    start: 'top 70%',
    end: 'center 60%',
    duration: 4,
  },
];

onMounted(() => {
  animations.forEach(({ selector, from, to, start, end, duration }) => {
    gsap.fromTo(selector, from, {
      ...to,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.work-content',
        start,
        end,
        scrub: true,
      },
    });
  });

  // Анимация появления блоков при прокрутке (замена IntersectionObserver)
  gsap.fromTo(
    '.work__additional',
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.work-content',
        start: 'top 85%',
        toggleActions: 'play none none none',
        onEnter: () => {
          blocks.forEach((block) => (block.visible = true));
        },
      },
    }
  );
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
			width: 100%;
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
			width: 100%;
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

		&.active{
			transform: rotate(45deg);
		}

		& img{
			width: 40px;
			height: 40px;
		}

		&:hover{
			transform: rotate(180deg);
		}

		&:focus-visible{
			border: none;
			outline: none;
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

.content-enter-active,
.content-leave-active {
  transition: all 0.5s ease;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
	transform: translateX(20px);
}

.contentReverse-enter-active,
.contentReverse-leave-active {
  transition: all 0.5s ease;
}

.contentReverse-enter-from,
.contentReverse-leave-to {
  opacity: 0;
	transform: translateX(-20px);
}

@media screen and (max-width: 1200px){
	.work{
		&__additional{

			&:nth-of-type(1){
				top: 14%;
				left: 16%;

				& .work__additional-content{
					top: -50px;
					left: 56px;
				}
			}

			&:nth-of-type(2){
				top: 42%;
				left: 80%;

				& .work__additional-content{
					top: -50px;
					left: -305px;
				}
			}

			&:nth-of-type(3){
				top: 70%;
				left: 28%;

				& .work__additional-content{
					top: -50px;
					left: 56px;
				}
			}
		}
	}

	.content-enter-from,
	.content-leave-to {
		opacity: 0;
		transform: translateX(-20px);
	}

	.contentReverse-enter-from,
	.contentReverse-leave-to {
		opacity: 0;
		transform: translateX(20px);
	}
}

@media screen and (max-width: 550px){
	.work{

		&__additional{
			&-button{
				width: 36px;
				height: 36px;

				& img{
					width: 30px;
					height: 30px;
				}
			}

			&-content{
				max-width: 250px;

				&_text{
					font-size: 14px;
					line-height: 20px;
				}
			}

			&:nth-of-type(1){
				top: 20%;
				left: 8%;

				& .work__additional-content{
					top: -25px;
					left: 40px;
				}
			}

			&:nth-of-type(2){
				top: 44%;
				left: 84%;

				& .work__additional-content{
					top: -15px;
					left: -255px;
				}
			}

			&:nth-of-type(3){
				top: 68%;
				left: 19%;

				& .work__additional-content{
					top: 40px;
					left: 0px;
				}
			}
		}
	}
}
</style>