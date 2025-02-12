<template>
	<n-config-provider :theme-overrides="themeOverrides">
		<n-modal-provider>
			<n-message-provider>
				<div class='content'>
					<Header/>
					<RouterView />
					<Footer class='footer'/>
				</div>
			</n-message-provider>
		</n-modal-provider>
	</n-config-provider>
</template>

<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';
const themeOverrides = {
	common: {
		primaryColor: '#6f95c2FF',
		primaryColorHover: '#A5C6ECFF',
		primaryColorPressed: '#5384BFFF',
	},
}
</script>

<style scoped lang="scss">
.content{
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.footer{
	margin-top: auto;
}
</style>
