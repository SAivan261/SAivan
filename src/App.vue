<template>
	<n-config-provider :theme-overrides="themeOverrides">
		<Header/>
		<RouterView />
	</n-config-provider>
</template>

<script setup>
import Header from './components/Header.vue';
const themeOverrides = {
	common: {
		primaryColor: '#6f95c2FF',
		primaryColorHover: '#A5C6ECFF',
		primaryColorPressed: '#5384BFFF',
	},
}
</script>

<style scoped lang="scss"></style>
