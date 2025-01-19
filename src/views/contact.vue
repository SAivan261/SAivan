<template>
	<div class="contact">
		<div class="contact__container">
			<div class="contact__form-container">
				<h1 class="contact-title">Обратная связь</h1>
				<n-form class="contact__form">
					<n-space class='contact__form-header'>
						<n-form-item
							label="Имя"
							:validation-status="inputValidationStatus"
							:feedback="inputFeedback"
							style="width: 100%"
						>
							<n-input
								size="large"
								v-model:value="inputValue"
								clearable
								placeholder="Ваше имя"
							/>
						</n-form-item>

						<n-form-item
							label="Телефон"
							:validation-status="inputNumberValidationStat"
						>
							<n-input
								size="large"
								v-model:value="inputValue"
								clearable
								placeholder="Ваш телефон"
							/>
						</n-form-item>
					</n-space>
					<n-form-item
						label="Комментарий"
						:validation-status="inputNumberValidationStatus"
					>
						<n-input
							size="medium"
							v-model:value="value"
							type="textarea"
							placeholder="Комментарий"
						/>
					</n-form-item>

					<n-form-item
						label="Загрузите ТЗ (при наличии)"
						:validation-status="inputNumberValidationStatus"
					>
						<n-upload
							multiple
							directory-dnd
							action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
							:max="5"
						>
							<n-upload-dragger>
								<div style="margin-bottom: 12px">
									<archive_ico size="48" color="primary" />
								</div>
								<n-text style="font-size: 16px">
									Нажмите или перенесите файл сюда
								</n-text>
							</n-upload-dragger>
						</n-upload>
					</n-form-item>
					<Button style="width: 100%">Отправить</Button>
				</n-form>
			</div>

			<div class="contact__info-container">
				<h2 class="contact__info-title">Контактная информация</h2>
				<div class="contact__info-content">
					<telegram_ico :size="iconSize" />
					<p class="contact__info-text">8(999)999-99-99</p>
				</div>
				<div class="contact__info-content">
					<telegram_ico :size="iconSize" />
					<p class="contact__info-text">8(999)999-99-99</p>
				</div>
				<div class="contact__info-content">
					<email_ico :size="iconSize" />
					<p class="contact__info-text">support@help.ru</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import archive_ico from '@/components/icons/archive_ico.vue'
import email_ico from '@/components/icons/email_ico.vue'
import telegram_ico from '@/components/icons/telegram_ico.vue'
import Button from '@/components/ui/Button.vue'
import { onMounted, computed } from 'vue';
import gsap from 'gsap';

const iconSize = computed(() => {
  if (window.innerWidth < 1024) {
    return 30;
  } else {
    return 48;
  }
});

onMounted(() => {
  const contact = document.querySelector('.contact');
  const title = document.querySelector('.contact-title');
  const infoTitle = document.querySelector('.contact__info-title');
  const form = document.querySelector('.contact__form');
  const infoContents = document.querySelectorAll('.contact__info-content');
  
  if (contact) {
    gsap.to(contact, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
            }
          );
        }

        if (infoTitle) {
          gsap.fromTo(
            infoTitle,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
              delay: 0.5,
            }
          );
        }

        if (form) {
          gsap.fromTo(
            form,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 0.5,
            }
          );
        }

        if (infoContents.length) {
          infoContents.forEach((content, index) => {
            gsap.fromTo(
              content,
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 1 + index * 0.3,
              }
            );
          });
        }
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.contact {
	padding: 0 12px;
	margin: 12px 0;
	opacity: 0;

	&__container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 48px;
		background-color: $color-white;
		box-shadow: $shadow;
		border-radius: 10px;
	}

	&-title {
		font-size: 52px;
		line-height: 62px;
		color: $color-primary;
		opacity: 0;
	}

	&__form{
		opacity: 0;
		margin: 0 auto;
	}

	&__form-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 0 0 12px 12px;
		min-width: 550px;
	}

	&__info-container {
		position: relative;
		background-image: url('@/assets/bg.webp');
		background-position: bottom left;
		background-size: cover;
		flex: 1;
		min-width: 290px;
		border-radius: 20px 10px 10px 20px;
		padding: 12px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 12px;
		overflow: hidden;
	}

	&__info-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(111, 148, 194, 0.5);
		mix-blend-mode: multiply;
		z-index: 1;
	}

	&__info-container > * {
		position: relative;
		z-index: 2;
	}

	&__info-title {
		color: #fff;
		font-size: 38px;
		line-height: 50px;
		opacity: 0;
	}

	&__info-content {
		display: flex;
		color: #fff;
		align-items: center;
		gap: 12px;
		background: rgba(255, 255, 255, 0.21);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.3px);
		-webkit-backdrop-filter: blur(6.3px);
		padding: 24px;
		opacity: 0;
	}

	&__info-text {
		font-size: 24px;
	}
}

@media screen and (max-width: 1024px){
	.contact-title{
		font-size: 42px;
		line-height: 58px;
	}

	.contact__info-title{
		font-size: 28px;
		line-height: 32px;
	}

	.contact__info-text{
		font-size: 20px;
	}
}

@media screen and (max-width: 920px){
	.contact__container{
		flex-direction: column;
		gap: 24px;
	}
}

@media screen and (max-width: 768px){
	.contact__form-container{
		min-width: auto;
		padding: 0 12px 12px 12px;
	}

	.contact-title{
		font-size: 36px;
		line-height: 42px;
	}

	.contact__info-title{
		font-size: 24px;
		line-height: 30px;
	}

	.contact__info-text{
		font-size: 18px;
	}
}

@media screen and (max-width: 450px){
	.contact__form-header{
		display: block !important;
	}
}
</style>
