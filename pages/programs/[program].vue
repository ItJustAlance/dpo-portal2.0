<script lang="ts" setup>
import { ref } from 'vue';
const breadcrumbList = ref([
  { label: 'Реестр программ', route: '/dd' },
  {
    label: 'Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе',
  },
]);

const programsList = [
  {
    id: 1,
    title: 'Программа 1',
    articul: 'ART001',
    text: 'Эта программа предназначена для изучения основ программирования. Она охватывает такие темы, как пления материала.',
    tags: ['программирование', 'основы', 'учеба'],
  },
  {
    id: 2,
    title: 'Программа 2',
    articul: 'ART002',
    text: 'Курс по веб-разработке, в котором рассматриваются современные технологии создания веб-сайтов. Вы научитесь работать с HTML, CSS и JavaScript, а также познакомитесь с основами адаптивного дизайна.',
    tags: ['веб-разработка', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Программа 3',
    articul: 'ART003',
    text: 'Данный курс посвящен изучению баз данных.ми данных.',
    tags: ['базы данных', 'SQL', 'проектирование'],
  },
];
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
                <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
              </div>
              <div class="mini-info__text">05083</div>
            </div>
          </div>
          <!--end list-tags -->
          <h1 class="h1-title">Управление взаимодействием ключевых участников образовательного процесса</h1>
          <div class="program-btns">
            <button class="btn btn--second">
              <span class="btn-label">Скачать программу</span>
              <SvgIcon name="download-simple" class="ic-clr ic24" />
            </button>
            <NuxtLink to="/" class="btn">
              <span class="btn-label">Перейти к курсам (1)</span>
            </NuxtLink>
          </div>
        </div>
        <!-- end news-info-header -->
        <section class="section-big">
          <div class="course-info__about">
            <div class="b-item --inline">
              <div class="b-label">ДЕЙСТВУЕТ</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="calendar-check" class="fnone ic12"></SvgIcon></div>
                26.09.2023 – 26.09.2025
              </div>
            </div>
            <div class="b-item --inline">
              <div class="b-label">ОРГАНИЗАЦИЯ</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="buildings" class="fnone ic12"></SvgIcon></div>
                ГАОУ ВО «Московский городской педагогический университет»
              </div>
            </div>
          </div>
          <!--end course-info__about-->
        </section>
        <section class="section-big">
          <h4 class="h4-title">Рекомендовано Экспертным советом ДПО от 26.09.2023</h4>
          <div class="program-recommends">
            <div class="item-recommend">
              <div class="item-recommend-wrapper">
                <div class="top">
                  <div class="b-icon"><SvgIcon name="check-circle" class="fnone ic32"></SvgIcon></div>
                  <div class="b-label">Рекомендовано</div>
                </div>
                <div class="bottom">
                  <div class="name">Мацаль И.И</div>
                  <div class="text">гл.инженер ООО Экзамен-Технолаб</div>
                </div>
              </div>
            </div>
            <!--end item -->
            <div class="item-recommend">
              <div class="item-recommend-wrapper">
                <div class="top">
                  <div class="b-icon"><SvgIcon name="check-circle" class="fnone ic32"></SvgIcon></div>
                  <div class="b-label">Рекомендовано</div>
                </div>
                <div class="bottom">
                  <div class="name">Мацаль И.И</div>
                  <div class="text">гл.инженер ООО Экзамен-Технолаб</div>
                </div>
              </div>
            </div>
            <!--end item -->
            <div class="item-recommend">
              <div class="item-recommend-wrapper">
                <div class="top --red">
                  <div class="b-icon"><SvgIcon name="x-circle" class="fnone ic32"></SvgIcon></div>
                  <div class="b-label">Не рекомендовано</div>
                </div>
                <div class="bottom">
                  <div class="name">Мацаль И.И</div>
                  <div class="text">гл.инженер ООО Экзамен-Технолаб</div>
                </div>
              </div>
            </div>
            <!--end item -->
          </div>
          <!--end program-recommends -->
        </section>
        <section>
          <h2 class="h2-title section-title">Еще программы этой организации</h2>
          <div class="program-list">
            <div v-for="item in programsList" :key="item.id" class="program-item">
              <ProgramBox :data="item" />
            </div>
          </div>
          <!--end news-list -->
        </section>
      </main>
    </div>
  </div>
</template>
