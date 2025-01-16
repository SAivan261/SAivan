<template>
	<n-icon :color="computedColor" :size="computedSize">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 512 512"
		>
			<path
				d="M416 80a48.05 48.05 0 0 0-48-48H144a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h224a48.05 48.05 0 0 0 48-48zM168 432a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm88 160a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm112 136a24 24 0 0 1-48 0v-80a24 24 0 0 1 48 0zm-24-136a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm19.31-100.69A16 16 0 0 1 352 176H160a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-4.69 11.31z"
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
