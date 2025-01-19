<template>
	<section class="section">
		<slot></slot>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
	display: flex;
	flex-direction: column;
	padding: 48px 24px 0 24px;
}

@media screen and (max-width: 900px){
	.section {
		padding: 24px 24px 0 24px;
	}
}

@media screen and (max-width: 768px){
	.section {
		padding: 24px 12px 0 12px;
	}
}
</style>
