<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
const breadcrumbList = ref([
  { label: "Организации-субъекты ДПО", route: "/dd" },
  {
    label: "Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе",
  },
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
    title: "Программа 1",
    articul: "ART001",
    text: "Эта программа предназначена для изучения основ программирования. Она охватывает такие темы, как пления материала.",
    tags: ["программирование", "основы", "учеба"],
  },
  {
    id: 6,
    title: "Программа 2",
    articul: "ART002",
    text: "Курс по веб-разработке, в котором рассматриваются современные технологии создания веб-сайтов. Вы научитесь работать с HTML, CSS и JavaScript, а также познакомитесь с основами адаптивного дизайна.",
    tags: ["веб-разработка", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Программа 3",
    articul: "ART003",
    text: "Данный курс посвящен изучению баз данных.ми данных.",
    tags: ["базы данных", "SQL", "проектирование"],
  },
];

const sliderLicense = reactive({
  data: [
    { id: 1, url: "/img/license.png" },
    { id: 2, url: "/img/license2.png" },
    { id: 3, url: "/img/license.png" },
    { id: 4, url: "/img/license2.png" },
  ],
});
const totalSlides = computed(() => sliderLicense.data?.length || 0);
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
          <div class="h-title-box">
            <div class="img">
              <img src="/img/subj-img.png" alt="" />
            </div>
            <h1 class="h1-title">ФГБОУ ВО «Российский биотехнологический университет (РОСБИОТЕХ)»</h1>
          </div>
        </div>
        <!-- end news-info-header -->
        <section class="section-medium">
          <div class="course-info__about">
            <div class="b-item">
              <div class="b-label">ТЕЛЕФОН</div>
              <div class="b-text">
                <div class="b-icon"><img src="/img/phone.svg" alt="" /></div>
                <div class="txt">+7(495)114-56-28</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ОРГАНИЗАЦИЯ</div>
              <div class="b-text">
                <div class="b-icon"><img src="/img/mapPin.svg" alt="" /></div>
                <div class="txt">ГАОУ ВО «Московский городской педагогический университет»</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ОРГАНИЗАЦИЯ</div>
              <div class="b-text">
                <div class="b-icon"><img src="/img/email.svg" alt="" /></div>
                <div class="txt">ГАОУ ВО «Московский городской педагогический университет»</div>
              </div>
            </div>
          </div>
          <!--end course-info__about-->
        </section>
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
                Знакомство с современными научными знаниями по созданию деталей и сборок в среде моделирования
                Autodesk Inventor
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
        <section class="section-big">
          <h2 class="h2-title section-title">Лицензии и официальные документы</h2>
          <div class="slider-license-wrapper">
            <Carousel
              class="slider-license"
              :value="sliderLicense.data"
              :num-visible="3"
              :num-scroll="1"
              circular
              :show-indicators="false"
              @update:page="onCurrentSlide"
            >
              <template #item="slotProps">
                <div class="slide-license">
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
          
          <!--end program-recommends -->
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Курсы организации</h2>
          <div class="popular-list">
            <div class="popular-item">
              <CourseBox />
            </div>
            <div class="popular-item">
              <CourseBox />
            </div>
            <div class="popular-item">
              <CourseBox />
            </div>
            <div class="popular-item --disabled">
              <CourseBox />
            </div>
          </div>
          <!--end popular-list -->
        </section>
        <section>
          <h2 class="h2-title section-title">Программы организации</h2>
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
