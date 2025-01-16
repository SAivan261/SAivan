<template>
	<div class='contactus'>
				<div class='contactus__content'>
					<h2 class='contactus__content-title'>
						<span>Свяжитесь с нами</span>
						<br>
						 и начните ваш проект уже сегодня
					</h2>
					<p class='contactus__content-text'>Наша команда предложит лучшие решения и поможет сделать ваш бизнес успешным в цифровом пространстве. Нажмите на кнопку ниже и оставьте заявку — первый шаг к вашему сайту.</p>
					<Button>Оставить заявку</Button>
				</div>
				<div class='contactus__img'>
						<img class='icon' src="@/assets/message.svg" alt="">
				</div>
			</div>
</template>

<script setup>
import { onMounted } from 'vue'
import Button from '@/components/ui/Button.vue'


onMounted(() => {
  const contactSection = document.querySelector('.contactus');
  const imgElement = document.querySelector('.contactus__img');
  const iconElement = imgElement.querySelector('.icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        imgElement.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8,
  });

  observer.observe(contactSection);

  imgElement.addEventListener('animationend', () => {
    iconElement.style.opacity = '1';
  });
});
</script>

<style lang="scss" scoped>
.contactus{
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	margin: 12px 0 24px 0;
	padding: 24px;
	

	&__content{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 50%;

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
		justify-content: center;
		border-radius: 10px;
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      box-shadow:  0 0 0 #cccccc,
                   0 0 0 #ffffff,
                    10px 10px 10px #cccccc inset,
                    -10px -10px 10px #ffffff inset;

      /* animation-fill-mode: forwards; */
			&.animate {
				animation: message 3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s alternate;
				animation-fill-mode: forwards;
			}

			& img{
				max-width: 170px;
				opacity: 0;
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
        height: 240px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      100% {
        width: 480px;
        height: 240px;
        background: #fafafa;
        box-shadow:  0px 20px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }
		}
</style>