<template>
	<footer class='footer'>
		<div class="footer__container">
			<RouterLink to="/"> 
				<div class="footer__container-ico">
					<img src="@/assets/logo.svg" alt="">
				</div>
			</RouterLink>
			<RouterLink to="/contact" class="footer__container-menu_item">
				Контакты
			</RouterLink>
			<ul class='footer__list'>
				<li class="footer__item footer__item-title">
					Контактная информация:
				</li>
				<li class="footer__item">
					<Phone_ico/>
					<a href="" class="footer__item-link">+7 (906)545-66-91</a>
				</li>
				<li class="footer__item">
					<Telegram_ico/>
					<a href="" class="footer__item-link">+7 (906)545-66-91</a>
				</li>
				<li class="footer__item">
					<Email_ico/>
					<a href="" class="footer__item-link">support@help.ru</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script setup>
import Phone_ico from './icons/phone_ico.vue'
import Telegram_ico from './icons/telegram_ico.vue'
import Email_ico from './icons/email_ico.vue';

</script>

<style lang="scss" scoped>
.footer{
	padding: 24px;
	background-color: $color-primary;
	border-radius: 10px 10px 0 0;
	box-shadow: $shadow;
	&__container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: $color-white;

		&-ico {
			width: 100px;

			& img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&-menu_item{
			font-size: 16px;
			color: $color-white;
		}
	}

	&__list{
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	&__item{
		display: flex;
		align-items: center;
		gap: 6px;

		&-title{
			font-size: 16px;
		}

		&-link{
			font-size: 14px;
			color: $color-white;
		}
	}
}

@media screen and (max-width: 768px){
	.footer{
		padding: 24px;
		
		&__container{
			flex-direction: column;
			gap: 12px;
		}

		&__list{
		align-items: center;
		justify-content: center;
	}
	}
}
</style>