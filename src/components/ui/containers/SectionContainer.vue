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
</style>
