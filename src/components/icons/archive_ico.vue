<template>
	<n-icon :depth="3" :color="computedColor" :size="computedSize">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 512 512"
		>
			<path
				d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
			></path>
			<rect
				x="48"
				y="64"
				width="416"
				height="80"
				rx="28"
				ry="28"
				fill="none"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="32"
			></rect>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
				d="M320 304l-64 64l-64-64"
			></path>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
				d="M256 345.89V224"
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
