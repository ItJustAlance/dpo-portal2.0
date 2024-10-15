<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
// import { useAuthStore } from "@/stores/auth";
import { useFiltersStore } from "~/stores/filters";

// const currentUser = useAuthUser();

// const initFilterData = ref(false);
const selectedCity = ref();
const filterPopular = ref(false);
const filterNew = ref(false);
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const programsList = [
  {
    id: 1,
    title: "Программа 1",
    articul: "ART001",
    text: "Эта программа предназначена для изучения основ программирования. Она охватывает такие темы, как пления материала.",
    tags: ["программирование", "основы", "учеба"],
  },
  {
    id: 2,
    title: "Программа 2",
    articul: "ART002",
    text: "Курс по веб-разработке, в котором рассматриваются современные технологии создания веб-сайтов. Вы научитесь работать с HTML, CSS и JavaScript, а также познакомитесь с основами адаптивного дизайна.",
    tags: ["веб-разработка", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Программа 3",
    articul: "ART003",
    text: "Данный курс посвящен изучению баз данных.ми данных.",
    tags: ["базы данных", "SQL", "проектирование"],
  },
  {
    id: 4,
    title: "Программа 4",
    articul: "ART004",
    text: "Программа по изучению основ машинного обучения. Курс включает в себя изучение алгоритмов, таких как линейная регрессия и деревья решений, а также работу с библиотеками Python для анализа данных.",
    tags: ["машинное обучение", "Python", "алгоритмы"],
  },
  {
    id: 5,
    title: "Программа 5",
    articul: "ART005",
    text: "Этот курс фокусируется на разработке мобильных приложений для Android. Вы изучите основы языка Java, а также научитесь использовать Android Studio для создания интерактивных приложений.",
    tags: ["мобильные приложения", "Android", "Java"],
  },
  {
    id: 6,
    title: "Программа 6",
    articul: "ART006",
    text: "Курс по кибербезопасности, в котором рассматриваются основные угрозы и методы защиты информации. Вы научитесь выявлять уязвимости и применять меры для обеспечения безопасности данных.",
    tags: ["кибербезопасность", "защита данных", "уязвимости"],
  },
  {
    id: 7,
    title: "Программа 7",
    articul: "ART007",
    text: "Программа по изучению искусственног  изучению основ машинного обучения изучению основ машинного обученияо интеллекта и его применения в различных областях. Курс охватывает основы нейронных сетей и глубокого обучения, а также работу с библиотеками TensorFlow и Keras.",
    tags: ["искусственный интеллект", "нейронные сети", "TensorFlow"],
  },
  {
    id: 8,
    title: "Программа 8",
    articul: "ART008",
    text: "Данный курс посвящен разработке игр с использованием игрового движка Unity. Вы научитесь создавать 2D и 3D игры, работать с физикой и анимацией, а также использовать скрипты на языке C#.",
    tags: ["разработка игр", "Unity", "C#"],
  },
  {
    id: 9,
    title: "Программа 9",
    articul: "ART009",
    text: "Курс по облачным технологиям, в котором рассматриваются основные концепции и инструменты для работы с облачными платформами. Вы изучите основы AWS, Google Cloud и Azure.",
    tags: ["облачные технологии", "AWS", "Google Cloud", "Azure"],
  },
  {
    id: 10,
    title: "Программа 10",
    articul: "ART010",
    text: "Программа по изучению DevOps практик и инструментов. Курс включает в себя изучение CI/CD, контейнеризации с Docker и оркестрации с Kubernetes для автоматизации процессов разработки и развертывания.",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    id: 11,
    title: "Программа 11",
    articul: "ART011",
    text: "Этот курс охватывает основы финансовой аналитики с использованием Excel и других инструментов. Вы научитесь анализировать финансовые данные, создавать отчеты и визуализировать результаты.",
    tags: ["финансовая аналитика", "Excel", "отчеты"],
  },
  {
    id: 12,
    title: "Программа 12",
    articul: "ART012",
    text: "Курс по цифровому маркетингу, который охватывает стратегии продвижения в интернете, работу с социальными сетями и SEO. Вы изучите, как эффективно привлекать и удерживать аудиторию.",
    tags: ["цифровой маркетинг", "SEO", "социальные сети"],
  },
];

const filterCourse = ref({ id: "2", name: "Курсы", value: "val" });
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Организации-субъекты ДПО</div>
    <div class="b-container">
      <main class="content-body">
        <div class="docs-list --border-y">
          <div class="item-doc">
            <NuxtLink href="#" class="item-doc__wrapper">
              <span class="b-icon"><SvgIcon name="file-pdf" class="fnone ic24"></SvgIcon></span>
              <span class="b-name">Инструкция по размещению программ на Портале ДПО</span>
            </NuxtLink>
          </div>
          <!--end item-doc -->
          <div class="item-doc">
            <NuxtLink href="#" class="item-doc__wrapper">
              <span class="b-icon"><SvgIcon name="file-doc" class="fnone ic24"></SvgIcon></span>
              <span class="b-name">Инструкция по размещению программ на Портале ДПО</span>
            </NuxtLink>
          </div>
          <!--end item-doc -->
        </div>
        <div class="result-content">
          <div class="result-content__header">
            <div class="result-filters">
              <div class="result-filters__left --w-md-50">
                <div class="result-filters__item --w-100 --search">
                  <SearchNews placeholder="Поиск субъекта" />
                </div>
              </div>
              <div class="result-filters__right --w-md-50">
                <div class="result-filters__item">
                  <div class="b-checkbox">
                    <Checkbox
                      v-model="filterCourse.value"
                      :value="filterCourse.value"
                      :binary="true"
                      :input-id="filterCourse.id"
                      :name="filterCourse.name"
                    />
                    <label :for="filterCourse.id">{{ filterCourse.name }} </label>
                  </div>
                </div>
                <!--end result-filter__item -->
                <div class="result-filters__item --select">
                  <Select
                    v-model="selectedCity"
                    :options="cities"
                    option-label="name"
                    placeholder="Организатор"
                    class="select-filter"
                  >
                    <template #dropdownicon>
                      <!-- Используем любую иконку, например, FontAwesome -->
                      <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                    </template>
                  </Select>
                </div>
                <!--end result-filter__item -->
              </div>
            </div>
            <!--end result-filters -->
            <div class="filter-list-first">
              <div class="b-checkbox">
                <Checkbox v-model="filterPopular" :binary="true" input-id="popular" name="filterPopular" />
                <label for="popular">Популярные</label>
              </div>
              <div class="b-checkbox">
                <Checkbox v-model="filterNew" :binary="true" input-id="filterNew" name="filterNew" />
                <label for="filterNew">Новые</label>
              </div>
            </div>
            <!--end filter-list-first -->
          </div>
          <div class="result-content__body">
            <div class="row-sorts">
              <div class="result-filters">
                <div class="result-filters__item --select">
                  <Select
                    v-model="selectedCity"
                    :options="cities"
                    option-label="name"
                    placeholder="От A до Я"
                    class="select-filter-sort"
                  >
                    <template #dropdownicon>
                      <!-- Используем любую иконку, например, FontAwesome -->
                      <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                    </template>
                  </Select>
                </div>
                <!--end result-filter__item -->
              </div>
              <!--end result-filters -->
            </div>
            <div class="subject-list">
              <div v-for="item in programsList" :key="item.id" class="subject-item"> 
                <SubjectBox :key="item.id" :data="item" />
              </div>
            </div>
            <!--end news-list -->
            <div class="more-load --align-center">
              <button class="btn btn--second">
                <span class="btn-label">Еще 12 субъектов</span>
                <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
              </button>
            </div>
          </div>
        </div>
        <!--end result-content -->
      </main>
      <!--end content-body -->
    </div>
  </div>
  <!-- /.all -->
</template>
