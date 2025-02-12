<template>
	<div class="contact">
		<div class="contact__container">
			<div class="contact__form-container">
				<h1 class="contact-title">Обратная связь</h1>
				<n-form class="contact__form">
					<n-space class='contact__form-header'>
						<n-form-item
							label="Имя"
							:validation-status="inputValidationStatus"
							:feedback="inputFeedback"
							style="width: 100%"
						>
							<n-input
								size="large"
								v-model:value="formData.name"
								clearable
								placeholder="Ваше имя"
							/>
						</n-form-item>

						<n-form-item
							label="Телефон"
							:validation-status="inputNumberValidationStat"
						>
						<n-input
							size="large"
							v-model:value="formData.phone"
							@input="handleInput"
							clearable
							placeholder="+7 (___) ___-__-__"
						/>
						</n-form-item>
					</n-space>
					<n-form-item
						label="Комментарий"
						:validation-status="inputNumberValidationStatus"
					>
						<n-input
							size="medium"
							v-model:value="formData.comment"
							type="textarea"
							placeholder="Комментарий"
						/>
					</n-form-item>

					<n-form-item
						label="Заполните бриф, это поможет нам лучше понять друг друга"
					>
						<button class='contact__secondary-button' @click="showModal = true">Заполнить бриф</button>
					</n-form-item>
					<Button style="width: 100%" @click="sendToTelegram">Отправить</Button>
				</n-form>
			</div>

			<div class="contact__info-container">
				<h2 class="contact__info-title">Контактная информация</h2>
				<div class="contact__info-content">
					<phone_ico :size="iconSize" />
					<p class="contact__info-text">+7 (906)545-66-91</p>
				</div>
				<div class="contact__info-content">
					<telegram_ico :size="iconSize" />
					<p class="contact__info-text">+7 (906)545-66-91</p>
				</div>
				<div class="contact__info-content">
					<email_ico :size="iconSize" />
					<p class="contact__info-text">support@help.ru</p>
				</div>
			</div>
		</div>
	</div>

	<n-modal
    v-model:show="showModal"
    class="contact__modal"
    preset="card"
    :style="bodyStyle"
    title="Бриф"
    :bordered="false"
    size="small"
    :segmented="segmented"
  >
	<n-form :model="formData.brief">
		<n-scrollbar style="max-height: 70vh;">
    <!-- 1. Общая информация -->
		<div class="contact__modal-item">
			<p class="contact__modal-title">Общая информация</p>
			<n-form-item label="Название компании">
				<n-input v-model:value="formData.brief.companyName" placeholder="Укажите название вашей компании или проекта" />
			</n-form-item>
			<n-form-item label="Сфера деятельности">
				<n-input
					v-model:value="formData.brief.businessArea"
					placeholder="Опишите, чем занимается ваша компания"
				/>
			</n-form-item>
			<n-form-item label="Целевая аудитория">
				<n-input
					v-model:value="formData.brief.targetAudience"
					placeholder="Опишите вашу целевую аудиторию"
				/>
			</n-form-item>
		</div>
    <!-- 2. Цели сайта -->
		<div class="contact__modal-item">
			<p class="contact__modal-title">Цели сайта</p>
			<n-form-item label="Основная цель">
				<n-input v-model:value="formData.brief.mainGoal" placeholder="Например, продажа товаров" />
			</n-form-item>
			<n-form-item label="Дополнительные цели">
				<n-input
					v-model:value="formData.brief.additionalGoals"
					placeholder="Например, увеличение подписчиков"
				/>
			</n-form-item>
		</div>

    <!-- 3. Тип сайта -->
    <div class="contact__modal-item">
			<p class="contact__modal-title">Тип сайта</p>
			<n-form-item label="Тип сайта">
				<n-select
					v-model:value="formData.brief.siteType"
					:options="options"
					placeholder="Тип сайта"
					label-field="label"
					value-field="value"
				/>
			</n-form-item>
			<n-form-item label="Другое">
				<n-input v-model:value="formData.brief.otherSiteType" placeholder="Уточните, если нужно" />
			</n-form-item>
		</div>

    <!-- 4. Структура сайта -->
		<div class="contact__modal-item">
			<p class="contact__modal-title">Структура сайта</p>
			<n-form-item label="Основные разделы">
				<n-input
					v-model:value="formData.brief.siteStructure"
					type="textarea"
					placeholder="Опишите основные разделы сайта"
				/>
			</n-form-item>
		</div>
    <!-- 5. Дизайн и стиль -->
		<div class="contact__modal-item">
			<p class="contact__modal-title">Дизайн и стиль</p>
			<n-form-item label="Предпочтения по дизайну">
				<n-input
					v-model:value="formData.brief.designPreferences"
					placeholder="Опишите, какой стиль вам нравится"
				/>
			</n-form-item>
			<n-form-item label="Цветовая гамма">
				<n-input v-model:value="formData.brief.colorScheme" placeholder="Укажите предпочтения по цветам" />
			</n-form-item>
			<n-form-item label="Примеры сайтов">
				<n-input
					v-model:value="formData.brief.siteExamples"
					type="textarea"
					placeholder="Приведите 2-3 ссылки на сайты, которые вам нравятся"
				/>
			</n-form-item>
			<n-form-item label="Примеры сайтов">
				<n-input
					v-model:value="formData.brief.siteExamples"
					type="textarea"
					placeholder="Приведите 2-3 ссылки на сайты, которые вам не нравятся"
				/>
			</n-form-item>
		</div>

    <!-- 6. Функционал -->
    <div class="contact__modal-item">
			<p class="contact__modal-title">Функционал</p>
			<n-form-item label="Необходимые функции">
				<n-input
					v-model:value="formData.brief.requiredFeatures"
					type="textarea"
					placeholder="Перечислите необходимые функции"
				/>
			</n-form-item>
		</div>

		 <!-- 7. Контент -->
		<div class="contact__modal-item">
			<p class="contact__modal-title">Контент</p>
			<n-form-item label="Кто предоставляет контент">
				<n-input v-model:value="formData.brief.contentProvider" placeholder="Например, заказчик" />
			</n-form-item>
			<n-form-item label="Необходимые материалы">
				<n-input
					v-model:value="formData.brief.requiredMaterials"
					placeholder="Укажите, что у вас уже есть"
				/>
			</n-form-item>
		</div>

    <!-- 8. Сроки -->
    <div class="contact__modal-item">
			<p class="contact__modal-title">Сроки</p>
			<n-form-item label="Желаемые сроки запуска">
				<n-input v-model:value="formData.brief.deadline" placeholder="Например, через 1 месяц" />
			</n-form-item>
		</div>

    <!-- 9. Бюджет -->
    <div class="contact__modal-item">
			<p class="contact__modal-title">Бюджет</p>
			<n-form-item label="Ориентировочный бюджет">
				<n-input v-model:value="formData.brief.budget" placeholder="Например, до 100 000 рублей" />
			</n-form-item>
		</div>

    <!-- 10. Дополнительная информация -->
    <div class="contact__modal-item">
			<p class="contact__modal-title">Бюджет</p>
			<n-form-item label="Дополнительные пожелания">
				<n-input
					v-model:value="formData.brief.additionalInfo"
					type="textarea"
					placeholder="Укажите дополнительные пожелания"
				/>
			</n-form-item>
		</div>

    <button class='contact__secondary-button' @click="showModal = false">Сохранить</button>
		</n-scrollbar>
		</n-form>
  </n-modal>
</template>

<script setup>
import email_ico from '@/components/icons/email_ico.vue'
import telegram_ico from '@/components/icons/telegram_ico.vue'
import phone_ico from '@/components/icons/phone_ico.vue'
import Button from '@/components/ui/Button.vue'
import { onMounted, computed, ref } from 'vue';
import gsap from 'gsap';
import { useMessage } from 'naive-ui';

const messageInfo = useMessage();
const formData = ref({
  name: '',
  phone: '',
  comment: '',
  brief: {
    companyName: '',
    businessArea: '',
    targetAudience: '',
    mainGoal: '',
    additionalGoals: '',
    siteType: '',
    otherSiteType: '',
    siteStructure: '',
    designPreferences: '',
    colorScheme: '',
    siteExamples: '',
    requiredFeatures: '',
    contentProvider: '',
    requiredMaterials: '',
    deadline: '',
    deliveryStages: '',
    budget: '',
    additionalInfo: ''
  }
});

const options = [
  { label: 'Лендинг (одностраничный сайт)', value: 'landing', price: 29900 },
  { label: 'Корпоративный сайт', value: 'corporate', price: 49900 },
  { label: 'Интернет-магазин', value: 'ecommerce', price: 79900 },
  { label: 'Многофункциональный портал', value: 'portal', price: 49900 },
  { label: 'Сайт-визитка', value: 'business_card', price: 19900 },
  { label: 'Блог', value: 'blog', price: 24900 },
  { label: 'Новостной портал', value: 'news', price: 39900 },
  { label: 'Образовательная платформа', value: 'education', price: 69900 },
  { label: 'Форум', value: 'forum', price: 34900 },
  { label: 'Сайт для мероприятий', value: 'event', price: 29900 },
  { label: 'Каталог товаров', value: 'catalog', price: 45900 },
];

const getLabelByValue = (value) => {
  const option = options.find(opt => opt.value === value);
  return option ? option.label : 'Не указано';
};

const handleInput = (v) => {
  let input = v.replace(/\D/g, ''); // Убираем все нецифровые символы
  let formattedInput = '+7';

  if (input.length > 1) {
    input = input.substring(1); // Убираем первую цифру, если пользователь ввел "+7" или "8"
  }

  if (input.length > 0) {
    formattedInput += ` (${input.substring(0, 3)}`;
  }
  if (input.length > 3) {
    formattedInput += `) ${input.substring(3, 6)}`;
  }
  if (input.length > 6) {
    formattedInput += `-${input.substring(6, 8)}`;
  }
  if (input.length > 8) {
    formattedInput += `-${input.substring(8, 10)}`;
  }
  formData.value.phone = formattedInput;
};


const iconSize = computed(() => {
  if (window.innerWidth < 1024) {
    return 30;
  } else {
    return 48;
  }
});

const showModal = ref(false);

// Функция для очистки формы
const clearForm = () => {
  formData.value = {
    name: '',
    phone: '',
    comment: '',
    brief: {
      companyName: '',
      businessArea: '',
      targetAudience: '',
      mainGoal: '',
      additionalGoals: '',
      siteType: '',
      otherSiteType: '',
      siteStructure: '',
      designPreferences: '',
      colorScheme: '',
      siteExamples: '',
      requiredFeatures: '',
      contentProvider: '',
      requiredMaterials: '',
      deadline: '',
      deliveryStages: '',
      budget: '',
      additionalInfo: ''
    }
  };
};

// Функция для проверки пустых значений
const hasEmptyFields = () => {
  const { name, phone } = formData.value;
  return !name || !phone;
};

const sendToTelegram = async () => {
  // Проверка на пустые поля
  if (hasEmptyFields()) {
    messageInfo.warning('Пожалуйста, заполните все обязательные поля.');
    return;
  }

  const botToken = '7939558425:AAGY9DBX5WkAV7r-hXWYi3aD-0rxQxbf4Ck';
  const chatId = '638085718';

  // Формируем сообщение, исключая пустые значения
  const messageParts = [
    `Новая заявка:`,
    `Имя: ${formData.value.name}`,
    `Телефон: ${formData.value.phone}`,
    `Комментарий: ${formData.value.comment}`,
    `Бриф:`,
    `Название компании: ${formData.value.brief.companyName || 'Не указано'}`,
    `Сфера деятельности: ${formData.value.brief.businessArea || 'Не указано'}`,
    `Целевая аудитория: ${formData.value.brief.targetAudience || 'Не указано'}`,
    `Основная цель: ${formData.value.brief.mainGoal || 'Не указано'}`,
    `Дополнительные цели: ${formData.value.brief.additionalGoals || 'Не указано'}`,
    `Тип сайта: ${getLabelByValue(formData.value.brief.siteType)}`,
    `Другое: ${formData.value.brief.otherSiteType || 'Не указано'}`,
    `Структура сайта: ${formData.value.brief.siteStructure || 'Не указано'}`,
    `Предпочтения по дизайну: ${formData.value.brief.designPreferences || 'Не указано'}`,
    `Цветовая гамма: ${formData.value.brief.colorScheme || 'Не указано'}`,
    `Примеры сайтов: ${formData.value.brief.siteExamples || 'Не указано'}`,
    `Необходимые функции: ${formData.value.brief.requiredFeatures || 'Не указано'}`,
    `Кто предоставляет контент: ${formData.value.brief.contentProvider || 'Не указано'}`,
    `Необходимые материалы: ${formData.value.brief.requiredMaterials || 'Не указано'}`,
    `Желаемые сроки запуска: ${formData.value.brief.deadline || 'Не указано'}`,
    `Ориентировочный бюджет: ${formData.value.brief.budget || 'Не указано'}`,
    `Дополнительные пожелания: ${formData.value.brief.additionalInfo || 'Не указано'}`
  ];

  const message = messageParts.join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (response.ok) {
			messageInfo.success('Данные успешно отправлены')
      clearForm(); // Очищаем форму после успешной отправки
    } else {
      messageInfo.error('Ошибка при отправке данных.');
    }
  } catch (error) {
    console.error('Ошибка:', error);
    messageInfo.error('Произошла ошибка при отправке данных.');
  }
};

onMounted(() => {
  const contact = document.querySelector('.contact');
  const title = document.querySelector('.contact-title');
  const infoTitle = document.querySelector('.contact__info-title');
  const form = document.querySelector('.contact__form');
  const infoContents = document.querySelectorAll('.contact__info-content');
  
  if (contact) {
    gsap.to(contact, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
            }
          );
        }

        if (infoTitle) {
          gsap.fromTo(
            infoTitle,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
              delay: 0.5,
            }
          );
        }

        if (form) {
          gsap.fromTo(
            form,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 0.5,
            }
          );
        }

        if (infoContents.length) {
          infoContents.forEach((content, index) => {
            gsap.fromTo(
              content,
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 1 + index * 0.3,
              }
            );
          });
        }
      }
    });
  }
});
</script>

<style lang="scss" >
.contact {
	padding: 0 12px;
	margin: 12px 0;
	opacity: 0;

	&__container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 48px;
		background-color: $color-white;
		box-shadow: $shadow;
		border-radius: 10px;
	}

	&-title {
		font-size: 52px;
		line-height: 62px;
		color: $color-primary;
		opacity: 0;
	}

	&__form{
		opacity: 0;
		margin: 0 auto;
	}

	&__form-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px 0 24px 12px;
		min-width: 550px;
	}

	&__info-container {
		position: relative;
		background-image: url('@/assets/bg.webp');
		background-position: bottom left;
		background-size: cover;
		flex: 1;
		min-width: 290px;
		border-radius: 20px 10px 10px 20px;
		padding: 24px 12px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 12px;
		overflow: hidden;
	}

	&__info-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(111, 148, 194, 0.5);
		mix-blend-mode: multiply;
		z-index: 1;
	}

	&__info-container > * {
		position: relative;
		z-index: 2;
	}

	&__info-title {
		color: #fff;
		font-size: 38px;
		line-height: 50px;
		opacity: 0;
	}

	&__info-content {
		display: flex;
		color: #fff;
		align-items: center;
		gap: 12px;
		background: rgba(255, 255, 255, 0.21);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.3px);
		-webkit-backdrop-filter: blur(6.3px);
		padding: 24px;
		opacity: 0;
	}

	&__info-text {
		font-size: 24px;
	}

	&__secondary-button{
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 20px;
		padding: 12px 24px;
		border: none;
		width: 100%;
		background-color: #6f94c216;
		color: $color-primary;
		transition: background-color 0.3s ease;

		&:hover{
			background-color: #6f94c24d;
		}
	}

	&__modal{
		max-width: 1000px;
		width: 90vw;
		height: 80vh;

		&-item{
			display: flex;
			flex-direction: column;
		}

		&-title{
			font-size: 16px;
			margin-bottom: 12px;
		}
	}
}

@media screen and (max-width: 1024px){
	.contact-title{
		font-size: 42px;
		line-height: 58px;
	}

	.contact__info-title{
		font-size: 28px;
		line-height: 32px;
	}

	.contact__info-text{
		font-size: 20px;
	}
}

@media screen and (max-width: 920px){
	.contact__container{
		flex-direction: column;
		gap: 24px;
	}
}

@media screen and (max-width: 768px){
	.contact__form-container{
		min-width: auto;
		padding: 0 12px 12px 12px;
	}

	.contact-title{
		font-size: 36px;
		line-height: 42px;
	}

	.contact__info-title{
		font-size: 24px;
		line-height: 30px;
	}

	.contact__info-text{
		font-size: 18px;
	}
}

@media screen and (max-width: 450px){
	.contact__form-header{
		display: block !important;
	}
}
</style>
