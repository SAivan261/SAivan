<template>
	<button class="page__button"><slot></slot></button>
</template>

<script setup></script>

<style lang="scss" scoped>
.page__button {
	border-radius: 20px;
	background-color: $color-primary;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	color: $color-white;
	padding: 12px 24px;
	transition: all 0.3s;

	font-size: 16px;
	font-weight: 700;
}

.page__button:hover {
	transform: translateY(-2px);
	box-shadow: $shadow;
}

.page__button:active {
	transform: translateY(2px);
}
</style>
