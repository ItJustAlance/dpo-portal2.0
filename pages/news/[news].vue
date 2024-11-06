<script lang="ts" setup>
import { ref } from 'vue';
const breadcrumbList = ref([
  { label: 'Новости', route: '/' },
  {
    label: 'Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе',
  },
]);

const sliderNews = reactive({
  data: [
    { id: 1, url: '/img/banner.png' },
    { id: 2, url: '/img/banner.png' },
    { id: 3, url: '/img/banner.png' },
    { id: 4, url: '/img/banner.png' },
  ],
});

const totalSlides = computed(() => sliderNews.data?.length || 0);
const currentSlide = ref(1);

function onCurrentSlide(event) {
  currentSlide.value = +event + 1;
}
</script>

<template>
  <div class="all">
    <Breadcrumb :model="breadcrumbList">
      <template #item="{ item, props }">
        <NuxtLink v-if="item.route" v-slot="{ navigate }" :to="item.route" custom>
          <a class="bread-item" :href="item.route" v-bind="props.action" @click="navigate">
            <span>{{ item.label }}</span>
          </a>
        </NuxtLink>
        <span v-else class="bread-item">
          <span>{{ item.label }}</span>
        </span>
      </template>
      <template #separator> <span class="f-700">/</span> </template>
    </Breadcrumb>
    <div class="b-container">
      <main class="content-body">
        <div class="news-info-header">
          <div class="list-tags">
            <div class="mini-info --blue">
              <div class="mini-info__ico">
                <SvgIcon name="bookmarks" class="fnone ic16"></SvgIcon>
              </div>
              <div class="mini-info__text">Новости</div>
            </div>
          </div>
          <!--end list-tags -->
          <h1 class="h1-title">
            Информация для учителей информатики, технологии, робототехники, физики, педагогов дополнительного
            образования
          </h1>
          <div class="date">
            <SvgIcon name="calendar-blank" class="fnone ic16"></SvgIcon>
            20.08.2023
          </div>
        </div>
        <!--end news-info-header -->
        <div class="slider-news-wrapper">
          <Carousel
            class="slider-news"
            :value="sliderNews.data"
            :num-visible="1"
            :num-scroll="1"
            :show-indicators="false"
            @update:page="onCurrentSlide"
          >
            <template #item="slotProps">
              <div class="banner-big">
                <img :src="slotProps.data.url" :alt="slotProps.data.id" class="w-full rounded" />
              </div>
            </template>
            <template #previcon>
              <SvgIcon name="ic-arrow-circle-left" class="fnone ic48"></SvgIcon>
            </template>
            <template #nexticon>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic48"></SvgIcon>
            </template>
          </Carousel>
          <div class="indicator">
            <strong>{{ currentSlide }}</strong> / {{ totalSlides }}
          </div>
        </div>

        <section class="section-big">
          <div class="article">
            <p>
              Курс направлен на совершенствование профессиональных компетенций обучающихся в области изучения основ
              трёхмерного моделирования и печати для использования в образовательном процессе. В программу входят
              следующие разделы:
            </p>
            <p>
              Курс направлен на совершенствование профессиональных компетенций обучающихся в области изучения основ
              трёхмерного моделирования и печати для использования в образовательном процессе. В программу входят
              следующие разделы:
            </p>
            <p><strong>В программу входят следующие разделы:</strong></p>
            <ol>
              <li>Моделирование конструкций с использованием технологии SnapCad.</li>
              <li>
                Знакомство с современными научными знаниями по созданию деталей и сборок в среде моделирования Autodesk
                Inventor
              </li>
              <li>Создание сборки в программе Autodesk Inventor</li>
              <li>Настройка вывода трёхмерных объектов в формат для трёхмерной печати</li>
            </ol>
            <p>
              Итоговая аттестация – зачет на основании совокупности выполненных работ, результатов тестирования и
              итоговой практической работы.
            </p>
          </div>
        </section>
        <section>
          <h2 class="h2-title section-title">Вам может быть интересно</h2>
          <div class="news-list --pb0">
            <NewsBox v-for="(item, index) in 3" :key="index" />
          </div>
          <!--end news-list -->
        </section>
      </main>
    </div>
  </div>
</template>
