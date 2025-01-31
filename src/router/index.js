import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/index.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@/views/index.vue'),
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('@/views/contact.vue'),
		},
	],
})

export default router
