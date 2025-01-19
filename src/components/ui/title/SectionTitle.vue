<template>
  <h2 class="section__title" ref="titleElement">
    <span
      v-for="(letter, index) in animatedTitle"
      :key="index"
      class="letter"
      :class="{ space: letter === ' ' }"
      :style="{ animationDelay: `${index / 15}s` }"
    >
      {{ letter === ' ' ? '\u00A0' : letter }}
    </span>
  </h2>
</template>

<script setup>
import { ref, onMounted, defineProps, toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});

const { title } = toRefs(props);
const animatedTitle = ref([]);
const titleElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          animatedTitle.value = [...title.value];
        }, 300);
        observer.disconnect();
      }
    },
    {
      threshold: 1.0,
    }
  );

  if (titleElement.value) {
    observer.observe(titleElement.value);
  }
});
</script>

<style lang="scss" scoped>
.section__title {
  font-size: 36px;
  line-height: 48px;
	height: 48px;
  color: $color-text;
  margin-bottom: 20px;
  gap: 0;
}

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-10px);
  animation: letterAnimation 0.3s ease forwards;
}

.letter.space {
  width: 8px;
}

@keyframes letterAnimation {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 768px){
  .section__title {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 12px;
    height: 36px;
  }
}

@media screen and (max-width: 450px){
  .section__title {
    font-size: 19px;
  }
}
</style>
