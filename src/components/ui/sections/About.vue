<template>
  <SectionTitle title="Немного о нас" />
  <div class="about-list" ref="aboutList">
    <div
      v-for="(item, index) in aboutItems"
      :key="index"
      class="about-item"
      :class="{ 'animate-item': animatedIndexes.includes(index) }"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="about-item_title-container">
        <div class="about-item_title-before"></div>
        <h3
          class="about-item_title"
          :class="{ 'animate-title': animatedIndexes.includes(index) }"
        >
          <div class="about-item_title-after"></div>
          {{ item.title }}
        </h3>
      </div>
      <p
        class="about-item_text"
        :class="{ 'animate-text': animatedIndexes.includes(index) }"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
  <div 
    class="about-text-container"
    ref="aboutTextContainer"
    :class="{ 'animate-container': textContainerAnimated }"
  >
    <p class="about-text">
      Мы верим, что в основе успешного проекта лежат инновации, внимание к деталям и тесное сотрудничество с клиентами. Благодаря комплексному подходу и глубокой экспертизе, создаем решения, которые соответствуют современным требованиям.
    </p>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import SectionTitle from "../title/SectionTitle.vue";

const aboutItems = [
  {
    title: "Наша миссия",
    text: "Мы создаем качественные веб-продукты, которые помогают бизнесу расти, внедряя инновации и сохраняя индивидуальный подход.",
  },
  {
    title: "Почему выбирают нас",
    text: "Опытные специалисты, комплексное решение задач от идеи до результата и прозрачность в каждом этапе делают нас надежным партнером.",
  },
  {
    title: "Что мы предлагаем",
    text: "Полный спектр услуг: разработка сайтов, UX/UI дизайн и техническая поддержка для эффективного развития вашего бизнеса.",
  },
];

const aboutList = ref(null);
const animatedIndexes = ref([]);
const textContainerAnimated = ref(false);
const aboutTextContainer = ref(null);

onMounted(() => {
  const listObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        aboutItems.forEach((_, index) => {
          setTimeout(() => {
            animatedIndexes.value.push(index);
          }, index * 500);
        });
        listObserver.disconnect();
      }
    },
    { threshold: 1.0 }
  );

  if (aboutList.value) {
    listObserver.observe(aboutList.value);
  }

  const textObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        textContainerAnimated.value = true;
        textObserver.disconnect();
      }
    },
    { threshold: 0.8 }
  );

  if (aboutTextContainer.value) {
    textObserver.observe(aboutTextContainer.value);
  }
});
</script>


<style lang="scss" scoped>
.about {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
	padding: 24px;

	&-text-container {
		position: relative;
		background-image: url('@/assets/bg.webp');
		background-position: center;
		background-size: cover;
		border-radius: 10px;
		padding: 12px;
		box-sizing: border-box;
		overflow: hidden;
		height: 100%;
		height: 248px;
		display: flex;
		align-items: end;
		opacity: 0;
		transition: opacity 0.6s ease-in-out;

		&.animate-container {
			opacity: 1;
		}
	}

	&-text-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(111, 148, 194, 0.8);
		mix-blend-mode: multiply;
		z-index: 1;
	}

	&-text-container > * {
		position: relative;
		z-index: 2;
	}

	&-text {
		margin-top: auto;
		font-size: 24px;
		line-height: 36px;
		color: $color-white;
	}

	&-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		margin-bottom: 24px;
	}

	&-item {
		position: relative;
		color: $color-white;
		display: flex;
		flex-direction: column;
		justify-content: end;
		gap: 6px;
		height: 248px;
		padding: 66px 12px 12px 12px;
		border-radius: 10px;
		flex: 1 1 0px;
		opacity: 0; /* Изначально скрыт */
		transform: translateX(-20px); /* Сдвиг влево */
		transition: all 0.5s ease-in-out; /* Плавная анимация */

		&.animate-item {
			opacity: 1; /* Плавное появление */
			transform: translateX(0); /* Возвращение на место */
		}

		&:nth-of-type(3) {
			background-color: $color-primary;
		}

		&:nth-of-type(2) {
			background-color: $color-primary;
		}

		&:nth-of-type(1) {
			background-color: $color-text;
		}

		&_title-container {
			position: absolute;
			top: 0;
			left: 0;
			padding: 12px;
			border-radius: 9px 0 9px 0;
			background-color: $color-white;
		}

		&_title {
			color: $color-text;
			font-size: 24px;
			line-height: 30px;
			opacity: 0; /* Изначально скрыт */
			transform: translateX(-10px); /* Сдвиг влево */
			transition: all 0.4s ease-in-out; /* Плавная анимация */
			transition-delay: 0.2s; /* Задержка после появления блока */

			&.animate-title {
				opacity: 1; /* Плавное появление */
				transform: translateX(0); /* Возвращение на место */
			}

			&-before {
				transform: rotate(0deg);
				position: absolute;
				width: 20px;
				height: 20px;
				bottom: -20px;
				left: 0px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}

			&-after {
				transform: rotate(0deg);
				position: absolute;
				width: 20px;
				height: 20px;
				top: -12px;
    		right: -32px;
				background-image: radial-gradient(
					ellipse 40px 40px at 20px 20px,
					transparent 50%,
					#fff 51%
				);
				overflow: hidden;
			}
		}

		&_text {
			font-size: 16px;
			line-height: 27px;
			opacity: 0; /* Изначально скрыт */
			transition: opacity 0.4s ease-in-out; /* Плавная анимация */
			transition-delay: 0.4s; /* Задержка после появления заголовка */

			&.animate-text {
				opacity: 1; /* Плавное появление */
			}
		}

		&_list {
			display: flex;
			flex-direction: column;
			gap: 6px;

			&-item {
				list-style-type: disc;
				list-style-position: inside;
				font-size: 16px;
				line-height: 27px;
			}
		}
	}
}
</style>