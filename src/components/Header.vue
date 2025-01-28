<template>
	<header class="header">
		<div class="header__container">
			<RouterLink to="/"> 
				<div class="header__container-ico"><img src="@/assets/logo-primary.svg" alt=""></div>
			</RouterLink>
			<nav class="header__container-menu">
				<RouterLink to="/contact" class="header__container-menu_item"
					>Контакты</RouterLink
				>
			</nav>
		</div>
	</header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
	background-color: $color-white;
	padding: 12px 24px;
	border-radius: 0 0 10px 10px;
	display: flex;
	align-items: center;
	box-shadow: $shadow;

	&__container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-ico {
			height: 30px;

			& img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&-menu {
			display: flex;
			align-items: center;
			gap: 48px;

			&_item {
				font-size: 16px;
				color: $color-primary;
			}
		}
	}
}
</style>
