<template>
	<n-icon :color="computedColor" :size="computedSize">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 496 512"
		>
			<path
				d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
				fill="currentColor"
			></path>
		</svg>
	</n-icon>
</template>

<script setup>
import { computed } from 'vue'

// Props для цвета и размера
const props = defineProps({
	color: {
		type: String,
		default: 'white',
	},
	size: {
		type: Number,
		default: 20,
	},
})

const computedColor = computed(() => {
	return props.color === 'primary' ? '#6f95c2' : '#fff'
})

const computedSize = computed(() => props.size)
</script>
