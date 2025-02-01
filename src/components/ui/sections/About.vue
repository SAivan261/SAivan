<template>
  <SectionTitle title="Почему мы?" />
  <div class="about-list" ref="aboutList">
    <div v-for="(item, index) in aboutItems" :key="index" class="about-item">
      <div class="about-item_title-container">
        <div class="about-item_title-before"></div>
        <h3 class="about-item_title">
          <div class="about-item_title-after"></div>
          {{ item.title }}
        </h3>
      </div>
      <p class="about-item_text">{{ item.text }}</p>
    </div>
  </div>
  <div class="about-text-container" ref="aboutTextContainer">
    <p class="about-text">
      Мы создаём сайты, которые работают на ваш бизнес. Наша команда сочетает креативность, техническую экспертизу и индивидуальный подход, чтобы каждый проект стал мощным инструментом для роста.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../title/SectionTitle.vue";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
  {
    title: "Наша миссия",
    text: "Мы создаем современные и функциональные сайты, которые помогают бизнесу привлекать клиентов, увеличивать продажи и укреплять бренд.",
  },
  {
    title: "Почему выбирают нас",
    text: "Опытные специалисты, комплексное решение задач от идеи до результата и прозрачность в каждом этапе делают нас надежным партнером.",
  },
  {
    title: "Что мы предлагаем",
    text: "Полный цикл услуг: от разработки сайтов до SEO-оптимизации и технической поддержки.",
  },
];

const aboutList = ref(null);
const aboutTextContainer = ref(null);

onMounted(() => {
  if (aboutList.value) {
    const items = aboutList.value.children;

    gsap.utils.toArray(items).forEach((item, index) => {
      const title = item.querySelector(".about-item_title");
      const text = item.querySelector(".about-item_text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 70%", // Запуск анимации, когда 30% блока в области видимости
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      )
        .fromTo(
          title,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3" // Заголовок начинает появляться во время появления следующего контейнера
        )
        .fromTo(
          text,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2" // Текст появляется во время окончания заголовка
        );
    });
  }

  if (aboutTextContainer.value) {
    gsap.fromTo(
      aboutTextContainer.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutTextContainer.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
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
		transition: all 0.5s ease-in-out;

		&.animate-item {
			opacity: 1;
			transform: translateX(0);
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
			transition: all 0.4s ease-in-out;
			transition-delay: 0.2s;

			&.animate-title {
				opacity: 1;
				transform: translateX(0);
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
			transition: opacity 0.4s ease-in-out;
			transition-delay: 0.4s;

			&.animate-text {
				opacity: 1;
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

@media screen and (max-width: 1280px){
	.about{
		&-item{
			&_title{
				font-size: 20px;
				line-height: 28px;
			}
		}

		&-text{
			font-size: 20px;
			line-height: 28px;
		}
	}
}

@media screen and (max-width: 1024px){
	.about{

		&-list {
			flex-wrap: wrap;
			gap: 12px;
			margin-bottom: 12px;
			align-items: stretch;
		}

		&-item{
			min-width: 250px;
			height: auto;

			&_title{
				font-size: 18px;
				line-height: 24px;
			}
		}

		&-text-container{
			padding-top: 24px;
			height: auto;
		}

		&-text{
			font-size: 16px;
			line-height: 24px;
		}
	}
}

@media screen and (max-width: 450px){
	.about-item_title-container, .about-item{
		opacity: 1;
	}
	.about-item_title {
		font-size: 16px;
		line-height: 20px;
		opacity: 1;
	}

	.about-item_text{
		font-size: 14px;
		line-height: 20px;
		opacity: 1;
	}

	.about-text {
		font-size: 14px;
		line-height: 20px;
		opacity: 1;
	}
}
</style>