import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: import('@/views/index.vue'),
		},
		{
			path: '/contact',
			name: 'contact',
			component: import('@/views/contact.vue'),
		},
	],
})

export default router
