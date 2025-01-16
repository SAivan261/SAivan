<template>
 <!-- TODO: Сделать меню как здесь: https://www.naiveui.com/en-US/light/components/dropdown -->
	<div class="menu__container">
		<button class="menu__button" @click="toggleMenu">
			<menu_ico />
		</button>
		<transition name="menuList">
			<div class="menu__list" v-if="showMenu">
				<router-link
					v-for="(item, index) in options"
					:key="index"
					class="menu__item"
					:to="item.link"
				>
					<component :is="item.icon"></component>
					<p class="menu__link">{{ item.name }}</p>
				</router-link>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
import cases_ico from './icons/cases_ico.vue'
import home_ico from './icons/home_ico.vue'
import menu_ico from './icons/menu_ico.vue'
import phone_ico from './icons/phone_ico.vue'
const showMenu = ref(false)

const props = defineProps({
	currentIndex: Number,
})

watch(
	() => props.currentIndex,
	newIndex => {
		showMenu.value = false
	}
)

const options = ref([
	{
		name: 'Главная',
		icon: home_ico,
		link: '/',
	},
	{
		name: 'Кейсы',
		icon: cases_ico,
		link: '',
	},
	{
		name: 'Контакты',
		icon: phone_ico,
		link: '/contact',
	},
])
const toggleMenu = () => {
	showMenu.value = !showMenu.value
}
</script>

<style lang="scss" scoped>
.menu__container {
	position: relative;
}
.menu__button {
	padding: 8px;
	background-color: $color-primary;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.menu__list {
	position: absolute;
	right: 0px;
	top: 56px;
	background-color: $color-primary;
	border-radius: 20px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.menu__item {
	display: flex;
	flex-wrap: nowrap;
	gap: 8px;
	padding: 6px;
	align-items: center;
	cursor: pointer;
	border-radius: 8px;
	transition: background-color 0.3s;
}

.menu__item:hover {
	background-color: $color-white-hover;
}

.menu__link {
	color: $color-white;
	transition: color 0.3s;
}

.menuList-enter-active,
.menuList-leave-active {
	transition: all 0.3s ease-out;
}

.menuList-enter-from,
.menuList-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}
</style>
