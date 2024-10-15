<script lang="ts" setup>
import { ref, reactive } from "vue";

const route = useRoute();
const id = route.params.course;
console.log('id', id)
const breadcrumbList = ref([
  { label: "Курсы", route: "/" },
  {
    label: "Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе",
  },
]);

const sliderTeach = reactive({
  data: [
    { id: 1, url: "/img/teach1.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 2, url: "/img/teach2.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 3, url: "/img/teach-default.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 4, url: "/img/teach2.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 5, url: "/img/teach-default.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 6, url: "/img/teach1.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
  ],
  options: [
    {
      breakpoint: "1200px",
      numVisible: 4,
      numScroll: 1,
      circular: true,
    },
    {
      breakpoint: "1023px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 2,
      numScroll: 1,
      circular: true,
    },
  ],
});
const sliderReview = reactive({
  data: [
    {
      id: 1,
      url: "/img/ava.png",
      name: "Мацаль И.И",
      whois: "гл.инженер ООО Экзамен-Технолаб",
      text: "Программа повышения квалификации реализуется в течение одного месяца по мере комплектования группы в соответствии с календарным учебным графиком. Продолжительность реализации программы по графику – две недели с момента укомплектованности группы",
    },
    {
      id: 2,
      url: "/img/ava.png",
      name: "Мацаль И.И",
      whois: "гл.инженер ",
      text: "Программа повышения квалификации реализуется в течение одного месяца по мере комплектования группы в соответствии с календарным учебным графиком. Продолжительность реализации программы по графику.",
    },
    {
      id: 3,
      url: "/img/ava.png",
      name: "Мацаль И.И",
      whois: "гл.инженер ООО Экзамен-Технолаб",
      text: "Программа повышения квалификации реализуется в течение одного месяца по мере комплектования группы в соответствии с календарным учебным графиком. Продолжительность реализации программы по графику – две недели с момента укомплектованности группы",
    },
    {
      id: 4,
      url: "/img/ava.png",
      name: "Мацаль И.И",
      whois: "гл.инженер ООО Экзамен-Технолаб",
      text: "Программа повышения квалификации реализуется в течение одного месяца по мере комплектования группы в соответствии с календарным учебным графиком.",
    },
    {
      id: 5,
      url: "/img/ava.png",
      name: "Мацаль И.И",
      whois: "гл.инженер ООО Экзамен-Технолаб",
      text: "Программа повышения квалификации реализуется в течение одного месяца по мере комплектования",
    },
  ],
  options: [
    {
      breakpoint: "2000px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1023px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 1,
    },
  ],
});
</script>

<template>
  <div class="all">
    <Breadcrumb :model="breadcrumbList">
      <template #item="{ item, props }">
        <NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a class="bread-item" :href="href" v-bind="props.action" @click="navigate">
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
        <div class="section-big course-info-header">
          <div class="course-info-header__content">
            <div class="course-info__art">
              <SvgIcon name="barcode" class="fnone ic12"></SvgIcon>
              04868-22/23-Б-ЗД
            </div>
            <div class="course-info__title">
              <div class="h2-title">
                Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе
              </div>
              <div class="course-info-header__img --mobile"><img src="/img/course-img.png" alt="" /></div>
              <div class="b-btns">
                <a href="#programm-course" class="btn btn--second">Программа курса</a>
                <button class="btn">Записаться</button>
              </div>
            </div>
          </div>

          <div class="course-info-header__img"><img src="/img/course-img.png" alt="" /></div>
        </div>
        <section class="section-big">
          <div class="course-info__about">
            <div class="b-item">
              <div class="b-label">ПРОДОЛЖИТЕЛЬНОСТЬ</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="ic-clock" class="fnone ic12"></SvgIcon></div>
                32 часа
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ФИНАНСИРОВАНИЕ</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="ic-tag" class="fnone ic12"></SvgIcon></div>
                6 450 ₽
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ФОРМА</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="ic-monitor" class="fnone ic12"></SvgIcon></div>
                Очно-заочная с ДОТ
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">СТАРТ</div>
              <div class="b-text">
                <div class="b-icon"><SvgIcon name="calendar-check" class="fnone ic12"></SvgIcon></div>
                1 сентября 2023
              </div>
            </div>
          </div>
          <!--end course-info__about-->
        </section>
        <section class="section-big">
          <div class="course-nav-box">
            <div class="course-nav__text article">
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
              <p>В программу входят следующие разделы:</p>
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
            <div class="course-nav__menu">
              <div class="course-nav__menu-box">
                <div class="title">Направление</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель физики</span>
                  </li>
                </ul>
              </div>
              <div class="course-nav__menu-box">
                <div class="title">Направление</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель физики</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Педагог дополнительного образования</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель информатики</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель технологии</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--end course-nav -->
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Преподаватели</h2>
          <Carousel
            class="slider-teacher"
            :value="sliderTeach.data"
            :num-visible="4"
            :num-scroll="1"
            :show-indicators="false"
            circular
            :responsive-options="sliderTeach.options"
          >
            <template #item="slotProps">
              <div class="slide-teach">
                <div class="img"><img :src="slotProps.data.url" :alt="slotProps.data.id" class="w-full rounded" /></div>
                <div class="title">{{ slotProps.data.title }}</div>
                <div class="text">{{ slotProps.data.text }}</div>
              </div>
            </template>
            <template #previcon>
              <SvgIcon name="ic-arrow-circle-left" class="fnone ic48"></SvgIcon>
            </template>
            <template #nexticon>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic48"></SvgIcon>
            </template>
          </Carousel>
        </section>
        <section class="section-big --mb-sm --align-center">
          <NuxtLink class="btn btn--sm-full">Записаться на курс</NuxtLink>
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Программа курса</h2>
          <div class="course-program-list">
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">01</div>
                <div class="text">
                  Моделирование конструкций с использованием технологии SnapCad Моделирование конструкций с
                  использованием технологии SnapCad
                </div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">02</div>
                <div class="text">
                  Знакомство с современными научными знаниями по созданию деталей и сборок в среде моделирования
                  Autodesk Inventor
                </div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">03</div>
                <div class="text">Создание сборки в программе Autodesk Inventor</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">04</div>
                <div class="text">Настройка вывода трёхмерных объектов в формат для трёхмерной печати</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">05</div>
                <div class="text">Обучение 3 D моделированию и печати</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">06</div>
                <div class="text">Итоговая аттестация</div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-big --mb-sm">
          <h2 class="h2-title section-title --title-raiting">
            Оценки курса:
            <span class="info-raiting">
              <span class="star"><img src="/img/raiting.svg" alt="" /></span>
              <span class="num">4,0</span>
              (12 оценок)
            </span>
          </h2>
          <Carousel
            class="slider-review"
            :value="sliderReview.data"
            :num-visible="4"
            :num-scroll="1"
            :show-indicators="false"
            circular
            :responsive-options="sliderReview.options"
          >
            <template #item="slotProps">
              <div class="review-item">
                <div class="review-item__wrapper">
                  <div class="raiting">
                    <SvgIcon name="star" class="fnone ic16"></SvgIcon>
                    <SvgIcon name="star" class="fnone ic16"></SvgIcon>
                    <SvgIcon name="star" class="fnone ic16"></SvgIcon>
                    <SvgIcon name="star" class="fnone op50 ic16"></SvgIcon>
                    <SvgIcon name="star" class="fnone op50 ic16"></SvgIcon>
                  </div>
                  <div class="text">
                    {{ slotProps.data.text }}
                  </div>
                  <div class="review-item__bottom">
                    <div class="ava">
                      <img :src="slotProps.data.url" :alt="slotProps.data.id" class="w-full rounded" />
                    </div>
                    <div class="b-right">
                      <div class="name">{{ slotProps.data.name }}</div>
                      <div class="whois">{{ slotProps.data.whois }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #previcon>
              <SvgIcon name="ic-arrow-circle-left" class="fnone ic48"></SvgIcon>
            </template>
            <template #nexticon>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic48"></SvgIcon>
            </template>
          </Carousel>
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Организатор</h2>
          <div class="course-organizator-info">
            <div class="b-info">
              <div class="card-org">
                <div class="img"><img src="/img/org-img.png" alt="" /></div>
                <div class="text">ФГАОУ ВО «Национальный исследовательский технологический университет «МИСиС»</div>
              </div>
              <div class="course-info__about">
                <div class="b-item">
                  <div class="b-label">КОНТАКТЫ</div>
                  <div class="b-text">
                    <img src="/img/phone.svg" alt="" />
                    +7(495)114-56-28
                  </div>
                </div>
                <div class="b-item">
                  <div class="b-label">АДРЕС И МЕСТО ОБУЧЕНИЯ</div>
                  <div class="b-text">
                    <img src="/img/mapPin.svg" alt="" />
                    г. Москва, ул. Сретенка, д. 24/2, стр. 1, 3 этаж
                  </div>
                </div>
                <div class="b-item">
                  <div class="b-label">ЗАНЯТИЯ ПРОВОДЯТСЯ ПО ДНЯМ</div>
                  <div class="b-text">
                    <img src="/img/calendarCheck.svg" alt="" />
                    Уточняется у ответственного за курс
                  </div>
                </div>
              </div>
              <!--end course-info__about-->
            </div>
            <div class="b-img">
              <img src="/img/browsing.svg" alt="" />
            </div>
          </div>
          <!--end course-organizator-info -->
        </section>
        <section class="section-big --mb-sm --align-center">
          <NuxtLink class="btn btn--md-full">Записаться на курс</NuxtLink>
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Вам может быть интересно</h2>
          <div class="popular-list">
            <div class="popular-item">
              <CourseBox />
            </div>
            <div class="popular-item">
              <CourseBox />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
