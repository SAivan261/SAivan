<template>
	<div class='page'>
		<div class="page__container">
			<Promo/>
			<SectionContainer>
				<About/>
			</SectionContainer>
			<SectionContainer>
				<Work/>
			</SectionContainer>
			<SectionContainer>
				<Steps/>
			</SectionContainer>
			<SectionContainer>
				<ContactUs/>
			</SectionContainer>
	</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

import Promo from '@/components/ui/sections/Promo.vue';
import About from '@/components/ui/sections/About.vue';
import Work from '@/components/ui/sections/Work.vue';
import Steps from '@/components/ui/sections/Steps.vue';
import ContactUs from '@/components/ui/sections/ContactUs.vue';
import SectionContainer from '@/components/ui/containers/SectionContainer.vue';

onMounted(() => {
	const pageContainer = document.querySelector('.page__container');
	if (pageContainer) {
		gsap.to(pageContainer, {
			opacity: 1,
			duration: 1,
			ease: 'power2.out',
		});
	}
});
</script>

<style lang="scss" scoped>
.page{
	padding: 0 12px;
	margin: 12px 0;
	
	&__container{
		background-color: $color-white;
		box-shadow: $shadow;
		border-radius: 10px;
		opacity: 1;
	}
}
</style>
