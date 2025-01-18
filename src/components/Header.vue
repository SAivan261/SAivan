<template>
	<header class="header">
		<div class="header__container">
			<RouterLink to="/"> 
			<div class="header__container-ico"></div>
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
	display: flex;
	align-items: center;
	box-shadow: $shadow;

	&__container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-ico {
			width: 40px;
			height: 40px;
			background-color: $color-primary;
			border-radius: 20px;
		}

		&-menu {
			display: flex;
			align-items: center;
			gap: 48px;

			&_item {
				color: $color-primary;
			}
		}
	}
}
</style>
