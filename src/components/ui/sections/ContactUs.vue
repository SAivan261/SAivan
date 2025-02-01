<template>
	<div class='contactus'>
				<div class='contactus__content'>
					<h2 class='contactus__content-title'>
						<span>Начните свой проект</span>
						<br>
						 уже сегодня
					</h2>
					<p class='contactus__content-text'>Мы создаём сайты, которые привлекают клиентов и увеличивают продажи. Оставьте заявку, и мы предложим оптимальное решение для вашего бизнеса. Первый шаг к успешному проекту — это просто!</p>
					<Button @click='toContact'>Обсудить проект</Button>
				</div>
				<div class='contactus__img'>
						<img class='icon' src="@/assets/message.svg" alt="">
				</div>
			</div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from '../Button.vue';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const toContact = () => {
  router.push('/contact');
};

onMounted(() => {
  const contentElements = document.querySelectorAll('.contactus__content > *');
  const imgElement = document.querySelector('.contactus__img');
  const iconElement = imgElement.querySelector('.icon');

  // Анимация контента
  gsap.fromTo(
    contentElements,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contactus',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );

  // Создание таймлайна для анимации блока и появления иконки
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contactus',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });

  // Анимация контейнера
  tl.fromTo(
    imgElement,
    { width: '60px', height: '60px', boxShadow: '10px 10px 10px #cccccc inset, -10px -10px 10px #ffffff inset' },
    {
      width: '100%',
      height: '200px',
      background: '#fafafa',
      boxShadow: '0px 20px 40px #cccccc, 2px 2px 2px #ffffff inset',
      duration: 2,
      ease: 'power2.out',
    }
  );

  // Появление иконки (message.svg) на 80% анимации контейнера
  tl.to(iconElement, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4'); // Отступ назад на 0.4 сек
});
</script>

<style lang="scss" scoped>
.contactus{
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	margin: 12px 0 24px 0;

	&__content{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 50%;
		height: 240px;

    & > * {
			opacity: 0;
			transform: translateX(-50px);
		}

		&-title{
			font-size: 24px;
			line-height: 50px;
			
			& span{
				font-size: 36px;
				line-height: 48px;
				color: $color-white;
				padding: 12px;
				background-color: $color-primary;
				border-radius: 10px;
			}
		}

		&-text{
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 12px;
		}
	}

	&__img{
		display: flex;
		width: 50%;
		max-width: 480px;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		width: 60px;
		height: 60px;
		background: #f0f0f0;
		box-shadow:  0 0 0 #cccccc,
									0 0 0 #ffffff,
									10px 10px 10px #cccccc inset,
									-10px -10px 10px #ffffff inset;
		&.animate {
			animation: message 3s 0s alternate;
			animation-fill-mode: forwards;
		}

		& img{
			max-width: 170px;
			height: fit-content;
			opacity: 0;
			transform: scale(0.5);
			transition: opacity 0.3s ease-in-out;
		}
	}
}

@keyframes message {
      0% {
        width: 60px;
        height: 60px;
        background: #f0f0f0;
        box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;
      }
      25% {
        width: 60px;
        height: 60px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      50% {
        width: 60px;
        height: 200px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      100% {
        width: 100%;
        height: 200px;
        background: #fafafa;
        box-shadow:  0px 20px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }
}

@media screen and (max-width: 1280px){
	.contactus{

		&__content{

			&-title{
			font-size: 20px;
			line-height: 42px;

				& span{
					font-size: 32px;
				}
			}
			
			&-text{
				font-size: 16px;
				line-height: 20px;
			}
		}
	}
}

@media screen and (max-width: 1024px){
	.contactus{

		&__content{
			min-width: 55%;
		}
	}

	.contactus__img img{
		width: 120px;
	}
}

@media screen and (max-width: 768px){
	.contactus{
		flex-wrap: wrap;
		justify-content: center;

		&__content{
			width: 100%;
			min-width: auto;
			height: auto;

			&-title{
				font-size: 20px;
				line-height: 40px;
				
				& span{
					font-size: 28px;
					line-height: 36px;
				}
			}

			&-text{
				font-size: 16px;
				line-height: 20px;
			}
		}
	}

	.contactus__img img{
		width: 150px;
	}
}

@media screen and (max-width: 450px){
	.contactus{

		&__content{
			width: 100%;
			min-width: auto;
			height: auto;

			&-title{
				font-size: 20px;
				line-height: 35px;
				
				& span{
					font-size: 24px;
					line-height: 36px;
				}
			}

			&-text{
				font-size: 13px;
				line-height: 18px;
			}
		}
	}

	.contactus__img img{
		width: 120px;
	}
}
</style>